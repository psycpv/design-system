import React, { FC } from 'react';
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
} from '../../atoms';

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
  `,
  category: `
    -mb-2.5
  `,
  title: `
    text-xl
    md:text-xxl
  `,
  description: `
    text-md
  `,
  linkCta: `
    my-2.5
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
          <DzText
            className={cn(styles.category)}
            textSize={TEXT_SIZES.SMALL}
            text={category}
          />
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
    </div>
  );
};

export default DzSplit;
