import React, { FC } from 'react';
import { CardArtwork, CardArtworkData } from './CardArtwork';
import { CardMedia, CardMediaData } from './CardMedia';
import { CardContent, CardContentData } from './CardContent';

export const CARD_TYPES = {
  CONTENT: 'content',
  ARTWORK: 'artwork',
  BOOK: 'book',
  ARTIST: 'artist',
  GALLERY: 'gallery',
  MEDIA: 'media',
  PODCAST: 'podcast',
};

export const CARD_TYPES_NAMES = [
  CARD_TYPES.CONTENT,
  CARD_TYPES.ARTWORK,
  CARD_TYPES.BOOK,
  CARD_TYPES.ARTIST,
  CARD_TYPES.GALLERY,
  CARD_TYPES.MEDIA,
  CARD_TYPES.PODCAST,
] as const;

export type CardTypes = typeof CARD_TYPES_NAMES[number];

type DataCardType = CardArtworkData | CardMediaData | CardContentData;
export interface DzCardProps {
  type: CardTypes;
  data: DataCardType;
}

export const DzCard: FC<DzCardProps> = ({ type, data }) => {
  if (type === CARD_TYPES.MEDIA) {
    return <CardMedia data={data as CardMediaData} />;
  }
  if (type === CARD_TYPES.ARTWORK) {
    return <CardArtwork data={data as CardArtworkData} />;
  }
  if (type === CARD_TYPES.CONTENT) {
    return <CardContent data={data as CardContentData} />;
  }
  return <div>No supported type</div>;
};

export default DzCard;
