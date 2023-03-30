import React, { FC } from 'react';
import { DzText, DzMedia, DzMediaProps, TEXT_TYPES, TEXT_SIZES } from '../../atoms';
import { cn } from '../../utils/classnames';

export interface CardMediaData {
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
  `,
};

export const CardMedia: FC<CardMediaProps> = ({ data }) => {
  const { media, description } = data as CardMediaData;
  return (
    <div className={cn(styles.cardContainer)}>
      <DzMedia {...media}/>
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
