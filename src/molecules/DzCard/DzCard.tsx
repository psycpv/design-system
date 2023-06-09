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

export type DataCardType = CardArtworkData | CardMediaData | CardContentData;
export interface DzCardProps {
  type: CardTypes;
  data: DataCardType;
}

export function isArtworkCard(object: unknown): object is CardArtworkData {
  if (object !== null && typeof object === 'object' && object) {
    return (
      'artistName' in object ||
      'artworkTitle' in object ||
      'artworkYear' in object ||
      'medium' in object
    );
  }
  return false;
}

export function isCardMediaData(object: unknown): object is CardMediaData {
  if (object !== null && typeof object === 'object' && object) {
    return (
      !('title' in object) && ('media' in object || 'description' in object)
    );
  }
  return false;
}

export function isCardContentData(object: unknown): object is CardContentData {
  if (object !== null && typeof object === 'object' && object) {
    return (
      'title' in object ||
      'category' in object ||
      'subtitle' in object ||
      'secondaryTitle' in object ||
      'secondarySubtitle' in object
    );
  }
  return false;
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
