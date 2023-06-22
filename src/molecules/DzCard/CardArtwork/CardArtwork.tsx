import React, { FC } from 'react';
import {
  DzMedia,
  DzText,
  TEXT_TYPES,
  DzTitle,
  TITLE_TYPES,
  DzButton,
  MEDIA_OBJECT_FIT,
} from '../../../atoms';
import { cn } from '../../../utils/classnames';
import { priceFormatter } from '../../../utils/formatters';
import { CardArtworkData, CardArtworkProps } from './types';
import { styles } from './styles';

export const CardArtwork: FC<CardArtworkProps> = ({ data }) => {
  const {
    id,
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
    enableZoom = true,
  } = data as CardArtworkData;
  return (
    <div id={id} className={cn(styles.cardContainer)}>
      <DzMedia
        imgClass={cn(styles.mediaImg, enableZoom ? styles.mediaZoom : '')}
        objectFit={MEDIA_OBJECT_FIT.CONTAIN}
        className="overflow-hidden"
        {...media}
      />
      <div className={cn(styles.artwork.infoContainer)}>
        <div className={cn(styles.artwork.leftPanel)}>
          <div>
            <DzTitle
              classNameTitle={cn(styles.artwork.artistName)}
              titleType={TITLE_TYPES.P}
              title={artistName}
            />
            <DzTitle
              titleType={TITLE_TYPES.P}
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

          <div>
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
          {price ? (
            <div className={cn(styles.artwork.priceContainer)}>
              <DzTitle
                titleType={TITLE_TYPES.P}
                title={`USD${priceFormatter({ price })}`}
                classNameTitle={cn(styles.artwork.priceTitle)}
              />
              {framed ? (
                <DzText
                  className={cn(styles.artwork.tombstoneText)}
                  text={framed}
                  textType={TEXT_TYPES.P}
                />
              ) : null}
            </div>
          ) : null}
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
