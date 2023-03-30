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
      flex-col
      flex
      justify-between
      md:@4col/cardContainer:flex-row
      md:@4col/cardContainer:-mt-2.5
      md:@6col/cardContainer:mt-0
    `,
    leftPanel: `
      flex
      flex-col
      @6colMbl/cardContainer:gap-2.5
      md:@2col/cardContainer:gap-2.5
      md:@3col/cardContainer:gap-2.5
      md:@4col/cardContainer:gap-2.5
    `,
    artistName: `
      @6colMbl/cardContainer:text-sm
      @12colMbl/cardContainer:text-md
      md:@4col/cardContainer:text-md
      md:@10col/cardContainer:text-lg
    `,
    rightPanel: `
      mt-5
      md:@4col/cardContainer:m-0
      flex
      flex-col
      gap-5
    `,
    artWorkTitle: `
      @6colMbl/cardContainer:text-sm
      @12colMbl/cardContainer:text-md
      md:@4col/cardContainer:text-md
      md:@10col/cardContainer:text-lg
      italic
    `,
    artworkYear: `
      @6colMbl/cardContainer:text-sm
      @12colMbl/cardContainer:text-md
      md:@4col/cardContainer:text-md
      md:@10col/cardContainer:text-lg
      uppercase
    `,
    tombstoneContainer: `
      
    `,
    tombstoneText: `
      text-black-60
    `,
    priceContainer: `
      
    `,
    priceTitle: `
      @6colMbl/cardContainer:text-md
      md:@2col/cardContainer:text-sm
      md:@4col/cardContainer:text-md
    `,
  },
  mediaImg: `
    @6colMbl/cardContainer:min-h-[12.5rem]
    @12colMbl/cardContainer:min-h-[22.5rem]
    md:@2col/cardContainer:min-h-[15rem]
    md:@3col/cardContainer:min-h-[18.75rem]
    md:@4col/cardContainer:min-h-[22.5rem]
    md:@6col/cardContainer:min-h-[33.75rem]
    md:@10col/cardContainer:min-h-[45rem]
    md:@12col/cardContainer:min-h-[51.25rem]
  `,
  cardContainer: `
    @container/cardContainer
    w-full
    flex
    flex-col
    gap-5
  `,
  buttons:`
    @12colMbl/cardContainer:py-[0.8125rem]
    @12colMbl/cardContainer:px-[1.5625rem]
    md:@2col/cardContainer:py-[0.3125rem]
    md:@2col/cardContainer:px-[1.5625rem]
    md:@4col/cardContainer:py-[0.8125rem]
    md:@4col/cardContainer:px-[1.5625rem]
  `
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
    <div className={cn(styles.cardContainer)}>
      <DzMedia imgClass={cn(styles.mediaImg)} {...media} />
      <div className={cn(styles.artwork.infoContainer)}>
        <div className={cn(styles.artwork.leftPanel)}>
          <div>
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
          </div>

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
                {...(primaryCTA.ctaProps ?? {})}
                className={cn(styles.buttons)}
              >
                {primaryCTA.text}
              </DzButton>
            ) : null}
            {secondaryCTA ? (
              <DzButton
                {...(secondaryCTA.ctaProps ?? {})}
                className={cn(styles.buttons)}
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
