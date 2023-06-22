import React, { FC } from 'react';
import {
  DzText,
  DzMedia,
  DzMediaProps,
  ObjectPositionType,
  TEXT_TYPES,
  TEXT_SIZES,
  MEDIA_OBJECT_FIT,
  MEDIA_ASPECT_RATIOS,
} from '../../atoms';
import { cn } from '../../utils/classnames';

export interface CardMediaData {
  id?: string;
  media: DzMediaProps;
  description: string;
}

export interface CardMediaProps {
  data: CardMediaData;
}

const styles: any = {
  media: {
    descriptionText: `
      text-black-60
      mt-2.5
    `,
  },
  cardContainer: `
    w-full
    @container/cardContainer
  `,
  mediaImg: `
    w-full
  `,
};

export const CardMedia: FC<CardMediaProps> = ({ data }) => {
  const { id, media, description } = data as CardMediaData;
  return (
    <div id={id} className={cn(styles.cardContainer)}>
      <DzMedia
        imgClass={cn(styles.mediaImg)}
        objectFit={MEDIA_OBJECT_FIT.COVER}
        objectPosition={ObjectPositionType.CENTER}
        aspectRatio={MEDIA_ASPECT_RATIOS['16:9']}
        {...media}
      />
      <DzText
        className={cn(styles.media.descriptionText)}
        textType={TEXT_TYPES.P}
        textSize={TEXT_SIZES.XS}
        text={description}
      />
    </div>
  );
};

export default CardMedia;
