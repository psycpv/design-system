import React, { FC } from 'react';
import { CardArtwork, CardArtworkData } from './CardArtwork';
import { CardMedia, CardMediaData } from './CardMedia';
import { CardContent, CardContentData } from './CardContent';
import { CARD_TYPES, DzCardProps } from './types';

export const DzCard: FC<DzCardProps> = ({
  type,
  data,
  onClickImage,
  imageStyles,
}) => {
  if (type === CARD_TYPES.MEDIA) {
    return (
      <CardMedia data={data as CardMediaData} onClickImage={onClickImage} />
    );
  }
  if (type === CARD_TYPES.ARTWORK) {
    return (
      <CardArtwork
        data={data as CardArtworkData}
        onClickImage={onClickImage}
        imageStyles={imageStyles}
      />
    );
  }
  if (type === CARD_TYPES.CONTENT) {
    return <CardContent data={data as CardContentData} />;
  }
  return <div>No supported type</div>;
};

export default DzCard;
