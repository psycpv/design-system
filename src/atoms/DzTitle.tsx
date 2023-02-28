import { cn } from '@/utils/classnames';
import React, { createElement, FC, Fragment, HTMLAttributes } from 'react';

export const TEXT_SIZES = {
  XS: 'extraSmall',
  SM: 'small',
  LG: 'large',
  MD: 'medium',
  XL: 'extraLarge',
  XXL:'exExLarge',
  XXXL: 'xxxl',
};
export const TEXT_TYPES = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
};
export const TEXT_SIZE_NAMES = [
  TEXT_SIZES.SM,
  TEXT_SIZES.LG,
  TEXT_SIZES.MD,
  TEXT_SIZES.XL,
  TEXT_SIZES.XXL,
  TEXT_SIZES.XS,
  TEXT_SIZES.XXXL,
] as const;
export const TITLE_TAGS = [
  TEXT_TYPES.H1,
  TEXT_TYPES.H2,
  TEXT_TYPES.H3,
  TEXT_TYPES.H4,
  TEXT_TYPES.H5,
  TEXT_TYPES.H6,
] as const;
export const SUBTITLE_TAGS = [
  TEXT_TYPES.P,
  TEXT_TYPES.H2,
  TEXT_TYPES.H3,
  TEXT_TYPES.H4,
  TEXT_TYPES.H5,
  TEXT_TYPES.H6,
] as const;
export type TextSize = typeof TEXT_SIZE_NAMES[number];
export type TitleType = typeof TITLE_TAGS[number];
export type SubTitleType = typeof SUBTITLE_TAGS[number];

export interface DzTitleProps {
  titleType: TitleType;
  subtitleType?: SubTitleType;
  title: string;
  subtitle?: string;
  classNameTitle?: any;
  classNameSubtitle?: any;
  disabled?: boolean;
  titleSize?: TextSize;
  subtitleSize?: TextSize;
}

const styles: any = {
  heading: `
    text-lg
    text-black-100
  `,
  subheading: `
    text-md
    text-black-60
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
  exExLarge: `
    text-xxl
  `,
  xxxl: `
    text-xxxl
  `,
  extraSmall: `
    text-xs
  `,
};

export const DzTitle: FC<DzTitleProps> &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLHeadingElement> = ({
  titleType = TEXT_TYPES.H1,
  subtitleType = TEXT_TYPES.P,
  title,
  subtitle,
  disabled = false,
  titleSize = TEXT_SIZES.SM,
  subtitleSize = TEXT_SIZES.SM,
  classNameTitle,
  classNameSubtitle,
  ...rest
}) => {
  const disabledClass = disabled ? styles.disabled : '';
  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(titleType, props, title);

  const SubHeading =
    subtitleType && subtitle
      ? ({
          ...props
        }: HTMLAttributes<HTMLHeadingElement> &
          HTMLAttributes<HTMLHeadingElement>) =>
          createElement(subtitleType, props, subtitle)
      : () => <Fragment />;

  return (
    <div>
      <Heading
        className={cn(
          styles.heading,
          classNameTitle,
          styles[titleSize],
          disabledClass
        )}
        {...rest}
      />
      {subtitleType ? (
        <SubHeading
          className={cn(
            styles.subheading,
            classNameSubtitle,
            styles[subtitleSize],
            disabledClass
          )}
          {...rest}
        />
      ) : null}
    </div>
  );
};

export default DzTitle;
