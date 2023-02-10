import cn from 'classnames';
import React, { createElement, FC, Fragment, HTMLAttributes } from 'react';

export const TEXT_SIZE_NAMES = [
  'small',
  'large',
  'medium',
  'extraLarge',
  'extraSmall',
  'xxxl',
] as const;
export const TITLE_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const SUBTITLE_TAGS = ['h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;
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

const styles = {
  heading: `
    text-lg
    text-black-100
  `,
  subheading: `
    text-md
    text-black-60
  `,
  disabled: `
    text-black-40
    pointer-events-none
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

export const DzTitle: FC<DzTitleProps> &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLHeadingElement> = ({
  titleType = 'h1',
  subtitleType = 'p',
  title,
  subtitle,
  disabled = false,
  titleSize = 'small',
  subtitleSize = 'small',
  classNameTitle,
  classNameSubtitle,
  ...rest
}) => {
  const disabledClass = disabled ? styles.disabled : '';
  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(titleType, props, title);

  const SubHeading = subtitleType && subtitle
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
