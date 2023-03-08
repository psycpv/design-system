import { cn } from '../utils/classnames';
import React, {
  FC,
  Fragment,
  lazy,
  MouseEvent,
  useEffect,
  useState,
} from 'react';

export const ARROW_VARIANT_NAMES = ['primary', 'secondary'] as const;
export const ARROW_DIRECTION = ['Left', 'Right'] as const;

export type ArrowVariant = typeof ARROW_VARIANT_NAMES[number];
export type ArrowDirection = typeof ARROW_DIRECTION[number];

export interface DzArrowProps {
  direction: ArrowDirection;
  variant?: ArrowVariant;
  disabled?: boolean;
  className?: any;
  onClick?: Function;
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
  primary: `
    bg-black-100
  `,
  secondary: `
    bg-white-100
    border-black-60
    border
  `,
  disabled: `
    !bg-white-100
    !border-black-40
    !border
    !pointer-events-none
  `,
};

export const DzArrow: FC<DzArrowProps> = (props: DzArrowProps) => {
  const {
    direction,
    variant = 'primary',
    className,
    disabled,
    onClick,
  } = props;
  const [ArrowComponent, setArrowComponent] = useState<JSX.Element>(
    <Fragment />
  );
  const disabledStyle = disabled ? styles.disabled : '';
  const arrowColor = (cl: string) => (disabled ? '#CDCDCD' : cl);

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
          fill={arrowColor(variant === 'primary' ? 'white' : 'black')}
          // TODO Fix onClick event handling
          // onClick={handleClick}
        />
      );
      setArrowComponent(component);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        styles.arrowContainer,
        styles?.[variant],
        disabledStyle,
        className
      )}
    >
      {ArrowComponent ? ArrowComponent : null}
    </div>
  );
};

DzArrow.displayName = 'DzArrow';
DzArrow.defaultProps = {
  variant: 'primary',
  disabled: false,
};
