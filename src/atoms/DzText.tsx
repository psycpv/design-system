import { cn } from '../utils/classnames';
import React, { createElement, FC, HTMLAttributes, ReactNode } from 'react';

export const TEXT_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
  MEDIUM: 'medium',
  XL: 'extraLarge',
  XS: 'extraSmall',
  XXXL: 'xxxl',
};
export const TEXT_TYPES = {
  LABEL: 'label',
  P: 'p',
  SPAN: 'span',
};
export const TEXT_SIZE_NAMES = [
  TEXT_SIZES.SMALL,
  TEXT_SIZES.LARGE,
  TEXT_SIZES.MEDIUM,
  TEXT_SIZES.XL,
  TEXT_SIZES.XS,
  TEXT_SIZES.XXXL,
] as const;
export const TEXT_TAGS = [
  TEXT_TYPES.LABEL,
  TEXT_TYPES.P,
  TEXT_TYPES.SPAN,
] as const;
export type TextSize = typeof TEXT_SIZE_NAMES[number];
export type TextType = typeof TEXT_TAGS[number];

type TextElements = HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLLabelElement> &
  HTMLAttributes<HTMLSpanElement>;

export interface DzTextProps extends TextElements {
  textType?: TextType;
  text: ReactNode;
  className?: any;
  disabled?: boolean;
  textSize?: TextSize;
  htmlFor?: string;
}
type StyleType = TextSize & any;

const styles: StyleType = {
  heading: `
    text-lg
  `,
  subheading: `
    text-md
  `,
  enabled: `
    text-black-100
  `,
  disabled: `
    !text-black-40
    !pointer-events-none
  `,
  small: `
    text-sm
  `,
  large: `
    text-lg
  `,
  medium: `
    text-md
  `,
  extraLarge: `
    text-xl
  `,
  xxxl: `
    text-xxxl
  `,
  extraSmall: `
    text-xs
  `,
};

export const DzText: FC<DzTextProps> = ({
  textType = TEXT_TYPES.P,
  text,
  disabled = false,
  textSize = TEXT_SIZES.SMALL,
  className,
  ...rest
}) => {
  const disabledClass = disabled ? styles.disabled : styles.enabled;
  const TextType = ({ ...props }: TextElements) =>
    createElement(textType, props, text);

  return (
    <TextType
      className={cn(className, disabledClass, styles.heading, styles[textSize])}
      {...rest}
    />
  );
};

export default DzText;
