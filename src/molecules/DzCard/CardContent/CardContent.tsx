import React, { FC, useMemo } from 'react';
import {
  DzText,
  DzMedia,
  TEXT_SIZES,
  DzTitle,
  TITLE_TYPES,
  TITLE_SIZES,
  LINK_VARIANTS,
  DzLink,
  DzButton,
  MEDIA_ASPECT_RATIOS,
  TEXT_LINK_SIZES,
} from '../../../atoms';
import useWindowSize from '../../../hooks/useWindowSize';
import { BREAKPOINTS } from '../../../layout/breakpoints';
import { typeToSize } from '..';
import { mergeStyles } from '../../../lib/styles';
import { globalStyles, stylesSizes } from './styles';
import { CardContentData, CardContentProps } from './types';
import { cn } from '../../../utils/classnames';

export const CardContent: FC<CardContentProps> = ({ data }) => {
  const {
    size,
    id,
    media,
    category,
    title,
    subtitle,
    secondaryTitle,
    secondarySubtitle,
    description,
    portableTextDescription,
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

  const styles = useMemo(() => {
    const span = Array.isArray(size)
      ? isSmall
        ? typeToSize(size[0])
        : typeToSize(size[1])
      : typeToSize(size);

    return mergeStyles(globalStyles, stylesSizes[span]);
  }, [size, isSmall]);

  return (
    <div {...rest} id={id} className={cn(styles.cardContainer)}>
      {!hideImage ? (
        <DzMedia
          imgClass={styles.mediaImg}
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

        <div className={cn(styles.contentWrapper)}>
          {/* Primary Headline (required) */}
          <DzTitle
            className={cn(styles.titleWrapper)}
            title={title}
            titleSize={TITLE_SIZES.LG}
            classNameTitle={styles.title}
            classNameSubtitle={styles.title}
            titleType={titleType}
            subtitle={subtitle}
            subtitleType={subtitleType}
          />

          {/* All fields are optional and should flow as configured when the fields are turned on/off */}
          {secondaryTitle || secondarySubtitle ? (
            <DzTitle
              title={secondaryTitle}
              classNameTitle={styles.secondaryTitle}
              classNameSubtitle={styles.secondaryTitle}
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
          {portableTextDescription ? portableTextDescription : null}
        </div>

        {linkCTA ? (
          <div className={cn(styles.linkCta)}>
            <DzLink
              {...(linkCTA.linkProps ?? {})}
              href={linkCTA.url}
              LinkElement={linkCTA.linkElement}
              variant={LINK_VARIANTS.TEXT}
              textLinkSize={isSmall ? TEXT_LINK_SIZES.XS : TEXT_LINK_SIZES.SM}
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
