import React, { FC, useCallback, useMemo, useState } from 'react';
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
import { CardViewport, typeToSize } from '..';
import { mergeStyles } from '../../../lib/styles';
import { globalStyles, stylesSizes } from './styles';
import { CardContentData, CardContentProps } from './types';
import { cn } from '../../../utils/classnames';
import { slugify } from '../../../utils';
import { camelCaseItemProps } from '../../../utils/props';

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
    enableZoom = false,
    cardLink,
    viewport = CardViewport.Desktop,
    containerClassName = ' ',
    ...rest
  } = data as CardContentData;
  const restProps = camelCaseItemProps(rest);
  const [isHoverLink, setIsHover] = useState<boolean>(false);
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

    return mergeStyles(globalStyles, stylesSizes[viewport][span]);
  }, [size, isSmall, viewport]);

  const imageHoverStyle = useMemo(
    () => (isHoverLink ? styles.mediaLinkZoom : ''),
    [isHoverLink, styles]
  );

  const linkHoverStyle = useMemo(
    () => (isHoverLink ? styles.linkCardHover : ''),
    [isHoverLink, styles]
  );

  const renderWithLink = useCallback((children, linkProps) => {
    if (linkProps) {
      return (
        <DzLink
          {...linkProps}
          withoutStyle
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {children}
        </DzLink>
      );
    }
    return children;
  }, []);

  return renderWithLink(
    <div {...restProps} id={id} className={cn(styles.cardContainer, containerClassName)}>
      {!hideImage && media ? (
        <DzMedia
          className={enableZoom ? 'overflow-hidden' : ''}
          imgClass={cn(
            styles.mediaImg,
            enableZoom ? styles.mediaZoom : '',
            imageHoverStyle
          )}
          aspectRatio={MEDIA_ASPECT_RATIOS['4:3']}
          {...media}
          linkProps={cardLink ? undefined : media.linkProps}
          url={cardLink ? undefined : media.url}
          imgProps={{
            id: `CardMedia-${slugify(media?.imgProps?.alt) || ''}`,
            ...(media?.imgProps || {}),
          }}
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
          {portableTextDescription ? portableTextDescription : null}
        </div>

        {linkCTA ? (
          <div className={cn(styles.linkCta)}>
            <DzLink
              {...(linkCTA.linkProps ?? {})}
              href={linkCTA.url}
              LinkElement={cardLink ? 'span' : linkCTA.linkElement}
              variant={LINK_VARIANTS.TEXT}
              className={cn(linkHoverStyle)}
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
    </div>,
    cardLink
  );
};

export default CardContent;
