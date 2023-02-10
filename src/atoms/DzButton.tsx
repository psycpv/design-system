import cn from 'classnames';
import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  ButtonHTMLAttributes,
} from 'react';

import CheckmarkIcon from '@/svgIcons/checkmark';
import ChevronLeft from '@/svgIcons/chevronLeft';
import ChevronRight from '@/svgIcons/chevronRight';

export const BUTTON_VARIANT_NAMES = [
  'primary',
  'secondary',
  'tertiary',
] as const;

export const BUTTON_STATES = [
  'default',
  'hover',
  'focus',
  'active',
  'loading',
  'disabled',
  'success',
] as const;

export const BUTTON_SIZE_NAMES = ['small', 'large'] as const;

export type ButtonVariant = typeof BUTTON_VARIANT_NAMES[number];
export type ButtonState = typeof BUTTON_STATES[number];
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
}

const styles: any = {
  btn: `
    hover:underline
    focus:bg-black-60 
    focus:text-white-100
    hover:bg-black-60
    hover:text-white-100
    active:bg-black-80
    active:text-white-100
    disabled:pointer-events-none
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
  `,
  secondary: `
    bg-black-100
    text-white-100
    disabled:bg-black-40
  `,
  tertiary: `
    bg-transparent
    text-black-100
    focus:bg-black-10
    focus:text-black-100
    hover:bg-black-10
    hover:text-black-100
    active:bg-black-20
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
};

export const DzButton: ForwardRefExoticComponent<DzButtonProps> = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'large',
      focus,
      hover,
      active,
      disabled,
      success,
      onClick,
      maxWidth,
      minWidth,
      showRightArrow,
      showLeftArrow,
      ...rest
    },
    forwardedRef: ForwardedRef<HTMLButtonElement>
  ) => {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    };
    const childrenWithIcons =
      success || showLeftArrow || showRightArrow ? (
        <span className={styles.iconContainer}>
          <div className={styles.iconDiv}>
            {success ? <CheckmarkIcon /> : null}
            {showLeftArrow ? <ChevronLeft /> : null}
          </div>
          {children}
          <div className={styles.iconDiv}>
            {showRightArrow ? <ChevronRight /> : null}
          </div>
        </span>
      ) : (
        children
      );

    return (
      <button
        ref={forwardedRef}
        className={cn(styles.btn, styles?.[variant], styles?.[size])}
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
  variant: 'primary',
  size: 'large',
  focus: false,
  hover: false,
  active: false,
  maxWidth: '100%',
  disabled: false,
  success: false,
  minWidth: 'fit-content',
};

export default DzButton;
