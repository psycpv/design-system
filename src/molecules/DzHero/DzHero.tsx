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
  LINK_VARIANTS,
} from '../../atoms';
import { DzArrow, ARROW_DIRECTIONS } from '../../atoms';
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
  showArrows?: boolean;
  previousArrowHandler?: Function;
  nextArrowHandler?: Function;
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
  contentContainer: `
    w-full
    flex
    flex-col
    md:flex-row
  `,
  infoContainer: `
    w-full
    md:max-w-[43.125rem]
    flex
    flex-col
    gap-2.5
    p-2.5
    pt-5
    pl-5
    md:ml-0
    md:p-5
    md:pl-0
    basis-1/2
  `,
  controlsContainer: `
    w-full
    flex
    basis-1/2
    p-5
    justify-end
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
  linkCta: `
   mt-2.5
   mb-5
   md:my-5
  `,
  mediaImage: `
    max-h-[49.1875rem]
    w-full
  `,
  arrowsContainer: `
    flex
    gap-10
  `,
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
  showArrows = false,
  previousArrowHandler = () => null,
  nextArrowHandler = () => null,
}) => {
  return (
    <div className={cn(styles.heroContainer)}>
      <div>
        <DzMedia imgClass={cn(styles.mediaImage)} {...media} />
      </div>

      <div className={cn(styles.contentContainer)}>
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
                variant={LINK_VARIANTS.TEXT}
              >
                {linkCTA.text}
              </DzLink>
            </div>
          ) : null}
        </div>
        <div className={cn(styles.controlsContainer)}>
          {showArrows ? (
            <div className={cn(styles.arrowsContainer)}>
              <div onClick={() => previousArrowHandler()}>
                <DzArrow direction={ARROW_DIRECTIONS.LEFT} />
              </div>
              <div onClick={() => nextArrowHandler()}>
                <DzArrow direction={ARROW_DIRECTIONS.RIGHT} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DzHero;
