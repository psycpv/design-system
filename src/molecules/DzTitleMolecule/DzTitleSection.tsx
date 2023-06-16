import React, { FC } from 'react';
import {
  DzTitle,
  DzTitleProps,
  TITLE_SIZES,
  DzLink,
  DzLinkProps,
  TITLE_TYPES,
  LINK_VARIANTS,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { sliceMaxCharLength } from '../../utils/validators';

export interface DzTitleSectionProps {
  title: string;
  subtitle?: string;
  titleProps?: Omit<DzTitleProps, 'title' | 'subtitle'>;
  linkCTA?: LinkCTA;
  customClass?: string;
}

interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
}

const styles: any = {
  titleContainer: `
    block
    w-full
    flex
    gap-5
    flex-row
  `,
  titleClassContainer: `
    w-full
  `,
  title: `
    text-lg
    md:text-xxl
  `,
  linkCta: `
    min-w-fit
  `,
  linkText: `
    text-xs
    md:text-sm
  `,
};

const DEFAULT_TITLE_PROPS = {
  titleType: TITLE_TYPES.P,
  titleSize: TITLE_SIZES.LG,
  subtitleSize: TITLE_SIZES.LG,
  subtitleType: TITLE_TYPES.P,
};

const CHARACTER_LIMIT_TITLE = 50;

export const DzTitleSection: FC<DzTitleSectionProps> = ({
  title,
  subtitle,
  titleProps = DEFAULT_TITLE_PROPS,
  linkCTA,
  customClass = '',
}) => {
  return (
    <div className={cn(styles.titleContainer, customClass)}>
      <DzTitle
        className={cn(styles.titleClassContainer)}
        classNameTitle={cn(styles.title)}
        classNameSubtitle={cn(styles.title)}
        {...titleProps}
        subtitle={sliceMaxCharLength(subtitle, CHARACTER_LIMIT_TITLE)}
        title={sliceMaxCharLength(title, CHARACTER_LIMIT_TITLE)}
      />
      {linkCTA ? (
        <div className={cn(styles.linkCta)}>
          <DzLink
            {...(linkCTA.linkProps ?? {})}
            variant={LINK_VARIANTS.TEXT}
            className={cn(styles.linkText)}
            href={linkCTA.url}
            LinkElement={linkCTA.linkElement}
          >
            {linkCTA.text}
          </DzLink>
        </div>
      ) : null}
    </div>
  );
};

export default DzTitleSection;
