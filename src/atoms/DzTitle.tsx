import { cn } from '../utils/classnames';
import React, { createElement, FC, Fragment, HTMLAttributes } from 'react';

export const TITLE_SIZES = {
  XS: 'extraSmall',
  SM: 'small',
  LG: 'large',
  MD: 'medium',
  XL: 'extraLarge',
  XXL: 'exExLarge',
  XXXL: 'xxxl',
};
export const TITLE_TYPES = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
};
export const TITLE_SIZE_NAMES = [
  TITLE_SIZES.SM,
  TITLE_SIZES.LG,
  TITLE_SIZES.MD,
  TITLE_SIZES.XL,
  TITLE_SIZES.XXL,
  TITLE_SIZES.XS,
  TITLE_SIZES.XXXL,
] as const;
export const TITLE_TAGS = [
  TITLE_TYPES.H1,
  TITLE_TYPES.H2,
  TITLE_TYPES.H3,
  TITLE_TYPES.H4,
  TITLE_TYPES.H5,
  TITLE_TYPES.H6,
] as const;
export const SUBTITLE_TAGS = [
  TITLE_TYPES.P,
  TITLE_TYPES.H2,
  TITLE_TYPES.H3,
  TITLE_TYPES.H4,
  TITLE_TYPES.H5,
  TITLE_TYPES.H6,
] as const;
export type TitleSize = typeof TITLE_SIZE_NAMES[number];
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
  titleSize?: TitleSize;
  subtitleSize?: TitleSize;
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
  titleType = TITLE_TYPES.H1,
  subtitleType = TITLE_TYPES.P,
  title,
  subtitle,
  disabled = false,
  titleSize = TITLE_SIZES.SM,
  subtitleSize = TITLE_SIZES.SM,
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
