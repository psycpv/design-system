import React, { FC } from 'react';
import {
  DzText,
  DzButtonProps,
  DzLinkProps,
  DzMedia,
  DzMediaProps,
  TEXT_SIZES,
  DzTitle,
  TITLE_TYPES,
  TITLE_SIZES,
  LINK_VARIANTS,
  DzLink,
  DzButton,
} from '../../atoms';
import { cn } from '../../utils/classnames';

export interface CardContentProps {
  data: CardContentData;
}

export interface CardContentData {
  media: DzMediaProps;
  category?: string;
  title: string;
  subtitle?: string;
  secondaryTitle?: string;
  secondarySubtitle?: string;
  description?: string;
  linkCTA?: LinkCTA;
  primaryCTA?: PrimaryCTA;
  hideImage?: boolean;
}

interface PrimaryCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
}

const styles: any = {
  cardContainer: `
    w-full
    flex
    flex-col
    gap-5
    @container/cardContainer
  `,
  infoContainer: `
    flex
    flex-col
    gap-2.5
    md:@2col/cardContainer:gap-2.5
    md:@6col/cardContainer:gap-5
  `,
  title: `
    text-md
    xs:text-lg
    md:@2col/cardContainer:text-md
    md:@3col/cardContainer:text-lg
    md:@4col/cardContainer:text-xl
    md:@6col/cardContainer:text-xxl
  `,
  secondaryTitle: `
    text-sm
    xs:text-md
    md:@2col/cardContainer:text-sm
    md:@3col/cardContainer:text-md
    md:@4col/cardContainer:text-md
  `,
  description: `
    text-sm
    xs:text-md
    md:@2col/cardContainer:text-sm
    md:@4col/cardContainer:text-md
  `,
  linkCta: `
    py-5
    md:@2col/cardContainer:py-5
  `,
  btnCta: `
    md:@2col/cardContainer:py-[0.8125rem]
    md:@2col/cardContainer:px-[1.5625rem]
  `,
  slugText: `
    md:@2col/cardContainer:text-sm
  `,
  mediaImg: `
    md:@2col/cardContainer:min-h-[12.5rem]
    md:@3col/cardContainer:min-h-[18.75rem]
    md:@4col/cardContainer:min-h-[22.5rem]
    md:@6col/cardContainer:min-h-[33.75rem]
    md:@10col/cardContainer:min-h-[45rem]
    md:@12col/cardContainer:min-h-[51.25rem]
  `,
};

export const CardContent: FC<CardContentProps> = ({
  data
}) => {
  const {
    media,
    category,
    title,
    subtitle,
    secondaryTitle,
    secondarySubtitle,
    description,
    linkCTA,
    primaryCTA,
    hideImage = false,
  } = data as CardContentData;
  return (
    <div className={cn(styles.cardContainer)}>
      {!hideImage ? (
        <DzMedia imgClass={cn(styles.mediaImg)} {...media} />
      ) : null}

      <div className={cn(styles.infoContainer)}>
        {category ? (
          <DzText
            className={cn(styles.slugText)}
            textSize={TEXT_SIZES.XS}
            text={category}
          />
        ) : null}

        {/* Primary Headline (required) */}
        <DzTitle
          title={title}
          titleSize={TITLE_SIZES.MD}
          classNameTitle={cn(styles.title)}
          classNameSubtitle={cn(styles.title)}
          titleType={TITLE_TYPES.H2}
          subtitle={subtitle}
          subtitleType={TITLE_TYPES.H3}
        />

        {/* All fields are optional and should flow as configured when the fields are turned on/off */}
        {secondaryTitle || secondarySubtitle ? (
          <DzTitle
            title={secondaryTitle}
            classNameTitle={cn(styles.secondaryTitle)}
            classNameSubtitle={cn(styles.secondaryTitle)}
            titleType={TITLE_TYPES.H2}
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
        {primaryCTA ? (
          <div>
            <DzButton
              className={cn(styles.btnCta)}
              {...(primaryCTA.ctaProps ?? {})}
            >
              {primaryCTA.text}
            </DzButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardContent;
