import React, { FC } from 'react';
import {
  DzText,
  DzMedia,
  DzMediaProps,
  TEXT_TYPES,
  TEXT_SIZES,
} from '../../atoms';
import { cn } from '../../utils/classnames';

export interface CardMediaData {
  id?:string;
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
    @6colMbl/cardContainer:min-h-[12.5rem]
    @12colMbl/cardContainer:min-h-[22.5rem]
    md:@2col/cardContainer:min-h-[12.5rem]
    md:@3col/cardContainer:min-h-[18.75rem]
    md:@4col/cardContainer:min-h-[22.5rem]
    md:@6col/cardContainer:min-h-[33.75rem]
    md:@10col/cardContainer:min-h-[45rem]
    md:@12col/cardContainer:min-h-[51.25rem]
  `,
};

export const CardMedia: FC<CardMediaProps> = ({ data }) => {
  const { id, media, description } = data as CardMediaData;
  return (
    <div id={id} className={cn(styles.cardContainer)}>
      <DzMedia imgClass={cn(styles.mediaImg)} {...media} />
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
