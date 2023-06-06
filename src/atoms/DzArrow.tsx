import { cn } from '../utils/classnames';
import React, {
  FC,
  Fragment,
  lazy,
  MouseEventHandler,
  useEffect,
  useState,
  useRef,
} from 'react';
import useHover from '../hooks/useHover';

export const ARROW_MODES = {
  LIGHT_BACKGROUND: 'light',
  DARK_BACKGROUND: 'dark',
};
export const ARROW_MODES_NAMES = [
  ARROW_MODES.LIGHT_BACKGROUND,
  ARROW_MODES.DARK_BACKGROUND,
] as const;
export type ArrowMode = typeof ARROW_MODES_NAMES[number];

export const ARROW_DIRECTIONS = {
  LEFT: 'Left',
  RIGHT: 'Right',
};

export const ARROW_DIRECTIONS_NAMES = [
  ARROW_DIRECTIONS.LEFT,
  ARROW_DIRECTIONS.RIGHT,
] as const;

export type ArrowDirection = typeof ARROW_DIRECTIONS_NAMES[number];

export interface DzArrowProps {
  direction: ArrowDirection;
  mode?: ArrowMode;
  disabled?: boolean;
  className?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const styles: any = {
  arrowContainer: `
    w-10
    h-10
    rounded-full
    p-[0.625rem]
    pointer-events-auto
    cursor-pointer
  `,
  arrowLeft: ``,
  arrowRight: ``,
  arrowIcon: `
    w-4
    mx-auto
  `,
  light: `
    group
    border
    border-black-40
    hover:border-black-100
    active:border-black-100
    `,
  arrowLight: `
    text-black-80
    group-hover:text-black-100
    group-active:text-black-100
  `,
  dark: `
    group
    border
    border-white-100
    hover:bg-white-100
    active:bg-white-100
  `,
  arrowDark: `
    text-white-100
    group-hover:text-neutral-200
    group-active:text-neutral-200
  `,
  disabled: `
    !border-black-40
    !border
    !pointer-events-none
  `,
  arrowDisabled: `
    !fill-black-40
  `,
};

export const DzArrow: FC<DzArrowProps> = (props: DzArrowProps) => {
  const {
    direction,
    mode = ARROW_MODES.LIGHT_BACKGROUND,
    className,
    disabled = false,
    onClick,
  } = props;
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const isHover = useHover(hoverRef);
  const [ArrowComponent, setArrowComponent] = useState<JSX.Element>(
    <Fragment />
  );
  const disabledStyle = disabled ? styles.disabled : '';

  useEffect(() => {
    const ArwComponent = lazy(() =>
      direction === 'Left'
        ? import('../svgIcons/arrowLeft')
        : import('../svgIcons/arrowRight')
    );
    if (ArwComponent) {
      const component = (
        <ArwComponent
          className={cn(
            styles.arrowIcon,
            styles[`arrow${direction}`],
            disabled && styles.arrowDisabled,
            mode === ARROW_MODES.LIGHT_BACKGROUND && styles.arrowLight,
            mode === ARROW_MODES.DARK_BACKGROUND && styles.arrowDark
          )}
          width="100%"
          height="100%"
        />
      );
      setArrowComponent(component);
    }
  }, [isHover, disabled, mode, direction]);

  return (
    <div
      ref={hoverRef}
      className={cn(
        styles.arrowContainer,
        styles[mode],
        disabledStyle,
        className
      )}
      onClick={onClick}
    >
      {ArrowComponent ? ArrowComponent : null}
    </div>
  );
};

DzArrow.displayName = 'DzArrow';
