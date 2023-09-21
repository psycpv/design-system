import { ReactNode } from 'react';
import { DzMediaProps } from '../../../atoms';
import { BaseCard } from '../types';

export interface CardMediaData extends BaseCard {
  media: DzMediaProps;
  description: string;
  portableTextDescription?: ReactNode;
}

export interface CardMediaProps {
  data: CardMediaData;
  onClickImage?: (data: CardMediaData) => void;
}
