import { cn } from '../utils/classnames';
import React, {
  Fragment,
  lazy,
  MouseEventHandler,
  useEffect,
  useState,
  forwardRef,
  HTMLAttributes,
} from 'react';

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

export interface DzArrowProps extends HTMLAttributes<HTMLButtonElement> {
  direction: ArrowDirection;
  mode?: ArrowMode;
  disabled?: boolean;
  className?: any;
  style?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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

export const DzArrow = forwardRef<HTMLButtonElement, DzArrowProps>(
  (props, ref) => {
    const {
      direction,
      mode = ARROW_MODES.LIGHT_BACKGROUND,
      className,
      disabled = false,
      onClick,
      style,
      ...rest
    } = props;
    const [isHover, setIsHover] = useState<boolean>(false);
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
      <button
        ref={ref}
        className={cn(
          styles.arrowContainer,
          styles[mode],
          disabledStyle,
          className
        )}
        style={style}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        {...rest}
      >
        {ArrowComponent ? ArrowComponent : null}
      </button>
    );
  }
);

DzArrow.displayName = 'DzArrow';
