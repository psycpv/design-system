import React, { FC, useMemo } from 'react';
import { cn } from '../../utils/classnames';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  TEXT_SIZES,
  DzLink,
  DzLinkProps,
  DzTitle,
  TITLE_SIZES,
  TITLE_TYPES,
  LINK_VARIANTS,
  TEXT_LINK_SIZES,
} from '../../atoms';
import useWindowSize from '../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../layout/breakpoints';

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
}
interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
}

export interface DzSplitProps {
  type: SplitTypes;
  data: DataSplit;
  reverse?: boolean;
  animate?: boolean;
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
    md:gap-5
    pb-5
    md:pb-0
  `,
  title: `
    text-xl
    md:text-xxl
  `,
  linkCta: `
    mt-[0.9375rem]
  `,
  media: `
    bg-black-60
    h-full
    object-cover
  `,
  animateImg: `
    motion-safe:animate-slowZoomOut
    transition
    dz-timing
  `,
};

export const DzSplit: FC<DzSplitProps> = ({
  type = SPLIT_TYPES.TALL,
  reverse = false,
  animate = false,
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
  } = data ?? {};
  const containerTypeStyle =
    type === SPLIT_TYPES.SHORT
      ? 'min-h-[15.6875rem] md:min-h-[32.3125rem]'
      : 'min-h-[27.875rem] md:min-h-[57.5rem]';

  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);

  return (
    <div
      className={cn(
        styles.splitContainer,
        reverse
          ? 'flex-col-reverse md:flex-row-reverse'
          : 'flex-col md:flex-row'
      )}
    >
      <div className={cn(styles.leftContainer, containerTypeStyle)}>
        <DzMedia
          imgClass={cn(
            styles.media,
            containerTypeStyle,
            animate ? styles.animateImg : ''
          )}
          {...media}
        />
      </div>
      <div className={cn(styles.rightContainer)}>
        {category ? (
          <DzText textSize={TEXT_SIZES.SMALL} text={category} />
        ) : null}
        <DzTitle
          title={title}
          classNameTitle={cn(styles.title)}
          classNameSubtitle={cn(styles.title)}
          titleType={TITLE_TYPES.P}
          subtitle={subtitle}
          subtitleType={TITLE_TYPES.P}
        />
        {secondaryTitle || secondarySubtitle ? (
          <DzTitle
            title={secondaryTitle}
            titleSize={TITLE_SIZES.LG}
            subtitleSize={TITLE_SIZES.LG}
            titleType={TITLE_TYPES.P}
            subtitle={secondarySubtitle}
            subtitleType={TITLE_TYPES.P}
          />
        ) : // preserve gap before and after even if it's not shown for mobile
        isSmall ? (
          <div />
        ) : null}
        {description ? (
          <DzText
            textSize={isSmall ? TEXT_SIZES.SMALL : TEXT_SIZES.MEDIUM}
            text={description}
          />
        ) : null}
        {linkCTA ? (
          <DzLink
            className={styles.linkCta}
            {...(linkCTA.linkProps ?? {})}
            href={isSmall ? 'pepito' : 'pepitA'}
            LinkElement={linkCTA.linkElement}
            variant={LINK_VARIANTS.TEXT}
            textLinkSize={isSmall ? TEXT_LINK_SIZES.XS : TEXT_LINK_SIZES.SMALL}
          >
            {linkCTA.text}
          </DzLink>
        ) : null}
      </div>
    </div>
  );
};

export default DzSplit;
