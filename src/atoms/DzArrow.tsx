import { cn } from '../utils/classnames';
import React, {
  FC,
  Fragment,
  lazy,
  MouseEventHandler,
  useEffect,
  useState,
  useRef,
  forwardRef,
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

export interface DzArrowProps {
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

export const DzArrow = forwardRef<HTMLButtonElement, DzArrowProps>(
  (props, ref) => {
    const {
      direction,
      mode = ARROW_MODES.LIGHT_BACKGROUND,
      className,
      disabled = false,
      onClick,
      style,
    } = props;
    const [isHover, setIsHover] = useState<boolean>(false);

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
            className={cn(styles.arrowIcon)}
            width="100%"
            height="100%"
            fill={arrowColor(isHover, disabled, mode)}
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
      >
        {ArrowComponent ? ArrowComponent : null}
      </button>
    );
  }
);

DzArrow.displayName = 'DzArrow';
