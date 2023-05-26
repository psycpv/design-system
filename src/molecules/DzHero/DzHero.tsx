import React, { FC, Fragment, forwardRef } from 'react';
import { Transition } from '@headlessui/react';

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
  enableTransitions?: boolean;
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
    flex
    flex-col
    gap-2.5
    p-2.5
    pt-5
    pl-5
    md:ml-0
    md:p-5
    md:pl-0
    basis-4/5
  `,
  controlsContainer: `
    w-full
    flex
    p-5
    justify-end
    basis-1/5
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

const MediaWrapper = ({ children, enableTransitions }) =>
  enableTransitions ? (
    <Transition.Child
      as="div"
      enter="transition ease-in duration-300"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      {children}
    </Transition.Child>
  ) : (
    <div>{children}</div>
  );

const ContentWrapper = ({ children, enableTransitions }) =>
  enableTransitions ? (
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  ) : (
    <>{children}</>
  );

export const DzHero: FC<DzHeroProps> = forwardRef<HTMLDivElement, DzHeroProps>(
  (
    {
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
      enableTransitions = false,
    },
    ref
  ) => {
    return (
      <div className={cn(styles.heroContainer)} ref={ref}>
        <MediaWrapper enableTransitions={enableTransitions}>
          <DzMedia imgClass={cn(styles.mediaImage)} {...media} />
        </MediaWrapper>

        <div className={cn(styles.contentContainer)}>
          <ContentWrapper enableTransitions={enableTransitions}>
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
          </ContentWrapper>
          <div className={cn(styles.controlsContainer)}>
            {showArrows ? (
              <div className={cn(styles.arrowsContainer)}>
                <DzArrow
                  onClick={() => previousArrowHandler()}
                  direction={ARROW_DIRECTIONS.LEFT}
                />
                <DzArrow
                  onClick={() => nextArrowHandler()}
                  direction={ARROW_DIRECTIONS.RIGHT}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export default DzHero;
