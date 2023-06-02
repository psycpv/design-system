import composeRefs from '@seznam/compose-react-refs';
import { cn } from '../utils/classnames';
import React, {
  useRef,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  ButtonHTMLAttributes,
} from 'react';

import useHover from '../hooks/useHover';
import CheckmarkIcon from '../svgIcons/checkmark';
import ChevronLeft from '../svgIcons/chevronLeft';
import ChevronRight from '../svgIcons/chevronRight';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};
export const BUTTON_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
};
export const BUTTON_VARIANT_NAMES = [
  BUTTON_VARIANTS.PRIMARY,
  BUTTON_VARIANTS.SECONDARY,
  BUTTON_VARIANTS.TERTIARY,
] as const;

export const BUTTON_SIZE_NAMES = [
  BUTTON_SIZES.SMALL,
  BUTTON_SIZES.LARGE,
] as const;

export type ButtonVariant = typeof BUTTON_VARIANT_NAMES[number];
export type ButtonSize = typeof BUTTON_SIZE_NAMES[number];
export interface DzButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  focus?: boolean;
  hover?: boolean;
  active?: boolean;
  disabled?: boolean;
  success?: boolean;
  showRightArrow?: boolean;
  showLeftArrow?: boolean;
  maxWidth?: string;
  minWidth?: string;
  className?: string;
}

const styles: any = {
  btn: `
    hover:underline
    disabled:pointer-events-none
    outline-transparent
  `,
  iconDiv: `
    flex
    justify-center
    items-center
  `,
  iconContainer: `
    flex
    gap-2
    items-center
  `,
  primary: `
    bg-transparent
    border-black-60
    border
    text-black-100
    disabled:text-black-40
    disabled:border-black-40
    focus:bg-black-60 
    focus:text-white-100
    hover:bg-black-60
    hover:text-white-100
    active:bg-black-80
    active:text-white-100
  `,
  secondary: `
    bg-black-100
    text-white-100
    disabled:bg-black-40
    focus:bg-black-60 
    focus:text-white-100
    hover:bg-black-60
    hover:text-white-100
    active:bg-black-80
    active:text-white-100
  `,
  tertiary: `
    bg-transparent
    text-black-100
    focus:bg-black-10
    focus:text-black-100
    hover:bg-white-100
    hover:text-black-100
    active:bg-transparent
    active:text-black-100
    disabled:text-black-40
  `,
  large: `
    py-[0.8125rem]
    px-[1.5625rem]
  `,
  small: `
    py-[0.3125rem]
    px-[1.5625rem]
  `,
  childrenContainer: `
    px-[1.6875rem]
  `,
};

const iconColor = (
  variant: ButtonVariant,
  isHover: boolean,
  disabled: boolean
): string => {
  if (disabled && variant != BUTTON_VARIANTS.SECONDARY) return '#CDCDCD';
  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return isHover ? 'white' : 'black';
    case BUTTON_VARIANTS.SECONDARY:
      return 'white';
    case BUTTON_VARIANTS.TERTIARY:
      return 'black';

    default:
      return 'black';
  }
};

export const DzButton: ForwardRefExoticComponent<DzButtonProps> = forwardRef(
  (
    {
      children,
      variant = BUTTON_VARIANTS.PRIMARY,
      size = BUTTON_SIZES.SMALL,
      disabled = false,
      success,
      onClick,
      maxWidth,
      minWidth,
      showRightArrow,
      showLeftArrow,
      className = '',
      ...rest
    },
    forwardedRef: ForwardedRef<HTMLButtonElement>
  ) => {
    const hoverRef = useRef<HTMLButtonElement | null>(null);
    const isHover = useHover(hoverRef);
    const fillIcon = iconColor(variant, isHover, disabled);
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    };
    const childrenWithIcons =
      success || showLeftArrow || showRightArrow ? (
        <span className={cn(styles.iconContainer)}>
          <div className={cn(styles.iconDiv)}>
            {success ? (
              <CheckmarkIcon aria-hidden="true" fill={fillIcon} />
            ) : null}
            {showLeftArrow ? (
              <ChevronLeft aria-hidden="true" fill={fillIcon} />
            ) : null}
          </div>
          <div className={cn(styles.childrenContainer)}>{children}</div>
          <div className={cn(styles.iconDiv)}>
            {showRightArrow ? (
              <ChevronRight aria-hidden="true" fill={fillIcon} />
            ) : null}
          </div>
        </span>
      ) : (
        children
      );

    return (
      <button
        type="button"
        ref={composeRefs(hoverRef, forwardedRef) as any}
        className={cn(styles.btn, styles?.[variant], styles?.[size], className)}
        style={{ maxWidth: maxWidth, minWidth: minWidth }}
        onClick={handleClick}
        disabled={disabled}
        {...rest}
      >
        {childrenWithIcons}
      </button>
    );
  }
);

DzButton.displayName = 'DzButton';
DzButton.defaultProps = {
  variant: BUTTON_VARIANTS.PRIMARY,
  size: BUTTON_SIZES.SMALL,
  maxWidth: '100%',
  disabled: false,
  success: false,
  minWidth: 'fit-content',
};

export default DzButton;
