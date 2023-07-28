import { ReactNode } from 'react';
import { DzButtonProps, DzMediaProps } from '../../../atoms';
import { BaseCard } from '../types';

interface CardCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface CardArtworkData extends BaseCard {
  media: DzMediaProps;
  artistName: string;
  artworkTitle: string;
  artworkYear: string;
  medium: string;
  dimensions: string;
  portableTextDimensions?: string | ReactNode;
  edition: string;
  price?: number;
  framed?: string;
  enableZoom?: boolean;
  primaryCTA?: CardCTA;
  secondaryCTA?: CardCTA;
}

export interface CardArtworkProps {
  data: CardArtworkData;
}
