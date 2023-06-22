import { DzButtonProps, DzMediaProps } from '../../../atoms';

interface CardCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

export interface CardArtworkData {
  id?: string;
  media: DzMediaProps;
  artistName: string;
  artworkTitle: string;
  artworkYear: string;
  medium: string;
  dimensions: string;
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
