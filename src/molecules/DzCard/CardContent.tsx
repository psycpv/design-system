import React, { FC, ReactNode, useMemo } from 'react';
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
  TitleType,
  SubTitleType,
  MEDIA_ASPECT_RATIOS,
  TEXT_LINK_SIZES,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import useWindowSize from '../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../layout/breakpoints';

export interface CardContentProps {
  data: CardContentData;
}

export interface CardContentData extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  media: DzMediaProps;
  category?: string;
  title: string;
  titleType?: TitleType;
  subtitle?: string;
  subtitleType?: SubTitleType;
  secondaryTitle?: string | ReactNode;
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
  `,
  title: `
    md:text-md
    md:@2col/cardContainer:text-md
    md:@3col/cardContainer:text-lg
    md:@4col/cardContainer:text-xl
    md:@6col/cardContainer:text-xxl
  `,
  secondaryTitle: `
    md:text-md
    md:@2col/cardContainer:text-sm
    md:@3col/cardContainer:text-md
    md:@4col/cardContainer:text-md
    whitespace-pre-wrap	
  `,
  description: `
    md:text-md
    md:@2col/cardContainer:text-sm
    md:@4col/cardContainer:text-md
    whitespace-pre-wrap
  `,
  linkCta: `
    pt-2.5
    md:pt-5
  `,
  btnCta: `
    md:@2col/cardContainer:py-[0.8125rem]
    md:@2col/cardContainer:px-[1.5625rem]
  `,
  slugText: `
    md:@2col/cardContainer:text-sm
  `,
  titleWrapper: `
    md:@6col/cardContainer:mb-2.5
  `,
};

export const CardContent: FC<CardContentProps> = ({ data }) => {
  const {
    id,
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
    titleType = TITLE_TYPES.P,
    subtitleType = TITLE_TYPES.P,
    ...rest
  } = data as CardContentData;

  const { width } = useWindowSize();
  const isSmall = useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);

  return (
    <div {...rest} id={id} className={cn(styles.cardContainer)}>
      {!hideImage ? (
        <DzMedia
          imgClass={cn(styles.mediaImg)}
          aspectRatio={MEDIA_ASPECT_RATIOS['4:3']}
          {...media}
        />
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
          className={styles.titleWrapper}
          title={title}
          titleSize={TITLE_SIZES.LG}
          classNameTitle={cn(styles.title)}
          classNameSubtitle={cn(styles.title)}
          titleType={titleType}
          subtitle={subtitle}
          subtitleType={subtitleType}
        />

        {/* All fields are optional and should flow as configured when the fields are turned on/off */}
        {secondaryTitle || secondarySubtitle ? (
          <DzTitle
            title={secondaryTitle}
            classNameTitle={cn(styles.secondaryTitle)}
            classNameSubtitle={cn(styles.secondaryTitle)}
            titleType={TITLE_TYPES.P}
            subtitle={secondarySubtitle}
            subtitleType={TITLE_TYPES.P}
            titleSize={TITLE_SIZES.SM}
          />
        ) : null}

        {description ? (
          <DzText
            className={cn(styles.description)}
            text={description}
            textSize={TEXT_SIZES.SMALL}
          />
        ) : null}
        {linkCTA ? (
          <div className={cn(styles.linkCta)}>
            <DzLink
              {...(linkCTA.linkProps ?? {})}
              href={linkCTA.url}
              LinkElement={linkCTA.linkElement}
              variant={LINK_VARIANTS.TEXT}
              textLinkSize={
                isSmall ? TEXT_LINK_SIZES.XS : TEXT_LINK_SIZES.SMALL
              }
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
