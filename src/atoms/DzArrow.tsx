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

export enum ArrowMode {
  FILL = 'fill',
  OUTLINE = 'outline',
}

export enum ArrowDirection {
  LEFT = 'Left',
  RIGHT = 'Right',
}

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
  fill: `
    bg-white-100
    hover:drop-shadow-100
    active:drop-shadow-100
    `,
  arrowFill: `
    text-black-100
  `,
  outline: `
    group
    border
    border-black-40
    hover:border-black-100
    active:border-black-100
  `,
  arrowOutline: `
    text-black-80
    group-hover:text-black-100
    group-active:text-black-100
  `,
  disabled: `
    !border-black-40
    !pointer-events-none
  `,
  arrowDisabled: `
    !text-black-40
  `,
};

export const DzArrow = forwardRef<HTMLButtonElement, DzArrowProps>(
  (props, ref) => {
    const {
      direction,
      mode = ArrowMode.FILL,
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
              mode === ArrowMode.FILL && styles.arrowFill,
              mode === ArrowMode.OUTLINE && styles.arrowOutline
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
