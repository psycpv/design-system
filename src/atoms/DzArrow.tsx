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

export const ARROW_DIRECTION = ['Left', 'Right'] as const;

export type ArrowDirection = typeof ARROW_DIRECTION[number];

export interface DzArrowProps {
  direction: ArrowDirection;
  mode?: ArrowMode;
  disabled?: boolean;
  className?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const styles: any = {
  arrowContainer: `
    relative
    w-10
    h-10
    rounded-full
    p-[0.625rem]
    pointer-events-auto
    cursor-pointer
  `,
  arrowLeft: `
    left-1/2
    translate-y-[-50%]
    translate-x-0`,
  arrowRight: `
    translate-y-[-50%]
    translate-x-0
  `,
  arrowIcon: `
    absolute
    top-1/2
    w-4
  `,
  light: `
    border
    border-black-40
    hover:border-black-100
  `,
  dark: `
    border
    border-white-100
    hover:bg-white-100
  `,
  hover: `
    border
  `,
  disabled: `
    !border-black-40
    !border
    !pointer-events-none
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

  const arrowColor = (hover: boolean, disabled: boolean, mode: ArrowMode) => {
    if (disabled) return '#CDCDCD';
    if (hover && mode === ARROW_MODES.LIGHT_BACKGROUND) return 'black';
    if (hover && mode === ARROW_MODES.DARK_BACKGROUND) return '#E5E5E5';
    return mode === ARROW_MODES.LIGHT_BACKGROUND ? '#757575' : 'white';
  };

  useEffect(() => {
    const ArwComponent = lazy(() =>
      direction === 'Left'
        ? import('../svgIcons/arrowLeft')
        : import('../svgIcons/arrowRight')
    );
    if (ArwComponent) {
      const component = (
        <ArwComponent
          className={cn(styles.arrowIcon, styles[`arrow${direction}`])}
          width="100%"
          height="100%"
          fill={arrowColor(isHover, disabled, mode)}
          onClick={onClick}
        />
      );
      setArrowComponent(component);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover, disabled, mode, direction]);

  return (
    <div
      ref={hoverRef}
      className={cn(
        styles.arrowContainer,
        styles?.[mode],
        disabledStyle,
        className
      )}
    >
      {ArrowComponent ? ArrowComponent : null}
    </div>
  );
};

DzArrow.displayName = 'DzArrow';
