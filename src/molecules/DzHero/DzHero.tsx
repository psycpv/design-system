import React, { FC } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  DzTitle,
  TITLE_SIZES,
  TITLE_TYPES,
  DzLink,
  DzLinkProps,
} from '../../atoms';
import { cn } from '../../utils/classnames';

export interface DzHeroProps {
  media: DzMediaProps;
  category?: string;
  title: string;
  subtitle?: string;
  secondaryTitle?: string;
  secondarySubtitle?: string;
  description?: string;
  linkCTA?: LinkCTA;
}

interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
}

const styles: any = {
  heroContainer: `
    flex
    flex-col
  `,
  infoContainer: `
    w-full
    md:max-w-[43.125rem]
    flex
    flex-col
    gap-2.5
    p-2.5
    pt-5
    ml-2.5
    md:ml-0
    md:p-5

  `,
  title: `
    text-xl
    md:text-xxl
  `,
  secondaryTitleContainer: `
    md:my-2.5
  `,
  description: `
    mb-2.5
    md:mb-5
  `,
  linkCta:`
   mt-2.5
   mb-5
   md:my-5
  `
};

export const DzHero: FC<DzHeroProps> = ({
  category,
  media,
  title,
  subtitle,
  secondaryTitle,
  secondarySubtitle,
  description,
  linkCTA,
}) => {
  return (
    <div className={cn(styles.heroContainer)}>
      <DzMedia {...media} />
      <div className={cn(styles.infoContainer)}>
        {category ? (
          <DzText className={cn(styles.category)} text={category} />
        ) : null}
        <DzTitle
          title={title}
          classNameTitle={cn(styles.title)}
          classNameSubtitle={cn(styles.title)}
          titleType={TITLE_TYPES.H1}
          subtitle={subtitle}
          subtitleType={TITLE_TYPES.H2}
        />
        {secondaryTitle || secondarySubtitle ? (
          <DzTitle
            title={secondaryTitle}
            className={cn(styles.secondaryTitleContainer)}
            titleType={TITLE_TYPES.H2}
            titleSize={TITLE_SIZES.LG}
            subtitleSize={TITLE_SIZES.LG}
            subtitle={secondarySubtitle}
            subtitleType={TITLE_TYPES.H3}
          />
        ) : null}
        {description ? (
          <DzText className={cn(styles.description)} text={description} />
        ) : null}
        {linkCTA ? (
          <div className={cn(styles.linkCta)}>
            <DzLink
              {...(linkCTA.linkProps ?? {})}
              href={linkCTA.url}
              LinkElement={linkCTA.linkElement}
            >
              {linkCTA.text}
            </DzLink>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DzHero;
