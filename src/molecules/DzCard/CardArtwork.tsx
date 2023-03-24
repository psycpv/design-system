import React, { FC, useMemo } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  TEXT_TYPES,
  DzTitle,
  TITLE_TYPES,
  DzButton,
  DzButtonProps,
  BUTTON_SIZES,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { priceFormatter } from '../../utils/formatters';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';

interface CardCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface CardArtworkData {
  media: DzMediaProps;
  artistName: string;
  artworkTitle: string;
  artworkYear: string;
  medium: string;
  dimensions: string;
  edition: string;
  price: number;
  framed: string;
  primaryCTA?: CardCTA;
  secondaryCTA?: CardCTA;
}

export interface CardArtworkProps {
  data: CardArtworkData;
}

const styles: any = {
  artwork: {
    infoContainer: `
      flex
      justify-between
    `,
    leftPanel: `
      mt-5
    `,
    artistName: `
      xs:text-md
      md:text-lg
    `,
    rightPanel: `
      mt-5
      flex
      flex-col
      gap-5
    `,
    artWorkTitle: `
      xs:text-md
      md:text-lg
      italic
    `,
    artworkYear: `
      xs:text-md
      md:text-lg
      uppercase
    `,
    tombstoneContainer: `
      mt-2.5
    `,
    tombstoneText: `
      text-black-60
    `,
    priceContainer: `
      mt-2.5
    `,
    priceTitle: `
      text-sm
      xs:text-md
    `,
  },
  cardContainer: `
    w-full
  `,
};

export const CardArtwork: FC<CardArtworkProps> = ({ data }) => {
  const { width } = useWindowSize();
  const isExtraSmall = useMemo(() => {
    return width < BREAKPOINTS.XS;
  }, [width]);

  const {
    media,
    artistName,
    artworkTitle,
    artworkYear,
    medium,
    dimensions,
    edition,
    price,
    framed,
    primaryCTA,
    secondaryCTA,
  } = data as CardArtworkData;
  return (
    <div className={cn(styles.cardContainer, '@container')}>
      <DzMedia {...media} />
      <div className={cn(styles.artwork.infoContainer)}>
        <div className={cn(styles.artwork.leftPanel)}>
          <DzTitle
            classNameTitle={cn(styles.artwork.artistName)}
            titleType={TITLE_TYPES.H3}
            title={artistName}
          />
          <DzTitle
            titleType={TITLE_TYPES.H3}
            title={
              <>
                <span className={cn(styles.artwork.artWorkTitle)}>
                  {artworkTitle}
                </span>
                ,{' '}
                <span className={cn(styles.artwork.artworkYear)}>
                  {artworkYear}
                </span>
              </>
            }
          />
          <div className={cn(styles.artwork.tombstoneContainer)}>
            {medium ? (
              <DzText
                className={cn(styles.artwork.tombstoneText)}
                text={medium}
                textType={TEXT_TYPES.P}
              />
            ) : null}
            {dimensions ? (
              <DzText
                className={cn(styles.artwork.tombstoneText)}
                text={dimensions}
                textType={TEXT_TYPES.P}
              />
            ) : null}
            {edition ? (
              <DzText
                className={cn(styles.artwork.tombstoneText)}
                text={edition}
                textType={TEXT_TYPES.P}
              />
            ) : null}
          </div>
          <div className={cn(styles.artwork.priceContainer)}>
            <DzTitle
              titleType={TITLE_TYPES.H4}
              title={`USD${priceFormatter({ price })}`}
              classNameTitle={cn(styles.artwork.priceTitle)}
            />
            <DzText
              className={cn(styles.artwork.tombstoneText)}
              text={framed}
              textType={TEXT_TYPES.P}
            />
          </div>
        </div>
        {primaryCTA || secondaryCTA ? (
          <div className={cn(styles.artwork.rightPanel)}>
            {primaryCTA ? (
              <DzButton
                size={isExtraSmall ? BUTTON_SIZES.SMALL : BUTTON_SIZES.LARGE}
                {...(primaryCTA.ctaProps ?? {})}
              >
                {primaryCTA.text}
              </DzButton>
            ) : null}
            {secondaryCTA ? (
              <DzButton
                size={isExtraSmall ? BUTTON_SIZES.SMALL : BUTTON_SIZES.LARGE}
                {...(secondaryCTA.ctaProps ?? {})}
              >
                {secondaryCTA.text}
              </DzButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardArtwork;
