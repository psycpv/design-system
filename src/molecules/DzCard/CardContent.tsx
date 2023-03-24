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
  DzLink,
  DzButton,
  BUTTON_SIZES,
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
  `,
  titleContainer: `
    mt-2.5
  `,
  secondaryTitleContainer: `
    mt-2.5
    xm:mt-5
  `,
  title: `
    text-md
    xs:text-lg
    sm:text-xl
    md:text-xxl
  `,
  secondaryTitle: `
    text-sm
    xs:text-md
    sm:text-lg
  `,
  description: `
    my-2.5
    xm:my-5
    text-sm
    sm:text-md
  `,
  linkCta: `
    mt-2.5
    pt-2.5
    xs:my-5
    xs:pt-5
  `,
  btnCta: `
    mt-2.5
    xs:mt-5
  `,
  slugText: `
    mt-2.5
  `,
};

export const CardContent: FC<CardContentProps> = ({ data }) => {
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
  } = data as CardContentData;
  return (
    <div className={cn(styles.cardContainer)}>
      <DzMedia {...media} />
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
        className={cn(styles.titleContainer)}
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
          className={cn(styles.secondaryTitleContainer)}
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
          >
            {linkCTA.text}
          </DzLink>
        </div>
      ) : null}
      {primaryCTA ? (
        <DzButton
          className={cn(styles.btnCta)}
          size={BUTTON_SIZES.SMALL}
          {...(primaryCTA.ctaProps ?? {})}
        >
          {primaryCTA.text}
        </DzButton>
      ) : null}
    </div>
  );
};

export default CardContent;
