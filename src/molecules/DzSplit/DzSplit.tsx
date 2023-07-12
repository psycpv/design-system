import React, { FC, useMemo, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import {
  DzMedia,
  MEDIA_TYPES,
  DzMediaProps,
  DzText,
  TEXT_SIZES,
  DzLink,
  DzLinkProps,
  DzTitle,
  ObjectPositionType,
  TITLE_SIZES,
  TITLE_TYPES,
  LINK_VARIANTS,
  TEXT_LINK_SIZES,
  MEDIA_ASPECT_RATIOS,
  MEDIA_OBJECT_FIT,
} from '../../atoms';
import useWindowSize from '../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../layout/breakpoints';
import { sliceMaxCharLength } from '../../utils/validators';
export const SPLIT_TYPES = {
  TALL: 'tall',
  SHORT: 'short',
};

export const SPLIT_TYPES_NAMES = [SPLIT_TYPES.TALL, SPLIT_TYPES.SHORT] as const;

export type SplitTypes = typeof SPLIT_TYPES_NAMES[number];

interface DataSplit {
  title: string;
  media: DzMediaProps;
  category?: string;
  subtitle?: string;
  secondaryTitle?: string;
  secondarySubtitle?: string;
  description?: string;
  linkCTA?: LinkCTA;
  portableTextDescription?: string | ReactNode;
}

interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: Partial<DzLinkProps>;
}

export interface DzSplitProps {
  type: SplitTypes;
  data: DataSplit;
  reverse?: boolean;
  animate?: boolean;
  mediaContainerClass?: string;
}

const styles: any = {
  splitContainer: `
    flex
    gap-5
    py-5
  `,
  leftContainer: `
    basis-1/2
    overflow-hidden
  `,
  rightContainer: `
    basis-1/2
    flex
    flex-col
    gap-2.5
    pb-5
    md:pb-0
  `,
  title: `
    text-xl
    md:text-xxl
  `,
  linkCta: `
    mt-[0.969rem]
    md:mt-[1.875rem]
  `,
  animateImg: `
    motion-safe:animate-slowZoomOut
    transition
    dz-timing
  `,
  primarySubHeadline: `
    mt-2.5
  `,
  contentWrapper: `
    flex
    flex-col
    gap-2.5
    md:gap-5
  `,
  shortPodcast: `
    relative
    h-[15.6875rem]
    md:h-[32.375rem]
  `,
  largePodcast: `
    relative
    h-[27.9375rem]
    md:h-[57.5rem]
  `,
  podcast: `
    absolute
    top-2/4
    -translate-y-1/2
  `,
  background: `
    bg-[#042498]
  `,
};
const NUMBER_OF_CHARS_TEXT = 50;
const NUMBER_OF_CHARS_BODY = 200;
export const DzSplit: FC<DzSplitProps> = ({
  type = SPLIT_TYPES.TALL,
  reverse = false,
  animate = false,
  mediaContainerClass = '',
  data,
}) => {
  const {
    media,
    title,
    subtitle,
    secondaryTitle,
    secondarySubtitle,
    category,
    linkCTA,
    description,
    portableTextDescription,
  } = data ?? {};

  const containerTypeStyle = useMemo(() => {
    return type === SPLIT_TYPES.SHORT
      ? 'min-h-full'
      : 'min-h-full md:min-h-[57.5rem]';
  }, [type]);

  const containerTypeStylePodcast = useMemo(() => {
    return type === SPLIT_TYPES.SHORT
      ? styles.shortPodcast
      : styles.largePodcast;
  }, [type]);

  const isPodcast = useMemo(() => {
    return media.type === MEDIA_TYPES.PODCAST;
  }, [media.type]);

  const mediaContainerStyles = useMemo(() => {
    return isPodcast ? containerTypeStylePodcast : containerTypeStyle;
  }, [isPodcast, containerTypeStylePodcast, containerTypeStyle]);

  const { width } = useWindowSize();

  const isSmall = useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);

  return (
    <div
      className={cn(
        styles.splitContainer,
        reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      )}
    >
      <div className={cn(styles.leftContainer)}>
        <div
          className={cn(mediaContainerStyles, 'w-full', mediaContainerClass)}
        >
          <DzMedia
            className={isPodcast ? styles.podcast : ''}
            podcastProps={
              isPodcast
                ? {
                    height: '50%',
                  }
                : undefined
            }
            imgClass={animate ? styles.animateImg : ''}
            objectFit={MEDIA_OBJECT_FIT.COVER}
            objectPosition={ObjectPositionType.TOP}
            aspectRatio={MEDIA_ASPECT_RATIOS['4:3']}
            {...media}
          />
        </div>
      </div>

      <div className={cn(styles.rightContainer)}>
        {category ? (
          <DzText textSize={TEXT_SIZES.SMALL} text={category} />
        ) : null}

        <div className={cn(styles.contentWrapper)}>
          <DzTitle
            title={sliceMaxCharLength(title, NUMBER_OF_CHARS_TEXT)}
            classNameTitle={cn(styles.title)}
            classNameSubtitle={cn(styles.title)}
            titleType={TITLE_TYPES.P}
            subtitle={sliceMaxCharLength(subtitle, NUMBER_OF_CHARS_TEXT)}
            subtitleType={TITLE_TYPES.P}
          />
          {secondaryTitle || secondarySubtitle ? (
            <DzTitle
              className={cn(styles.primarySubHeadline)}
              title={sliceMaxCharLength(secondaryTitle, NUMBER_OF_CHARS_TEXT)}
              titleSize={TITLE_SIZES.LG}
              subtitleSize={TITLE_SIZES.LG}
              titleType={TITLE_TYPES.P}
              subtitle={sliceMaxCharLength(
                secondarySubtitle,
                NUMBER_OF_CHARS_TEXT
              )}
              subtitleType={TITLE_TYPES.P}
            />
          ) : // preserve gap before and after even if it's not shown for mobile
          isSmall ? (
            <div />
          ) : null}
          {description ? (
            <DzText
              className={cn(styles.bodyText)}
              textSize={isSmall ? TEXT_SIZES.SMALL : TEXT_SIZES.MEDIUM}
              text={sliceMaxCharLength(description, NUMBER_OF_CHARS_BODY)}
            />
          ) : null}
          {portableTextDescription ? portableTextDescription : null}
        </div>

        {linkCTA ? (
          <DzLink
            className={cn(styles.linkCta)}
            {...(linkCTA.linkProps ?? {})}
            href={linkCTA.url}
            LinkElement={linkCTA.linkElement}
            variant={LINK_VARIANTS.TEXT}
            textLinkSize={isSmall ? TEXT_LINK_SIZES.XS : TEXT_LINK_SIZES.SM}
          >
            {linkCTA.text}
          </DzLink>
        ) : null}
      </div>
    </div>
  );
};

export default DzSplit;
