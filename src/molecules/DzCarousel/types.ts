import { ReactNode } from 'react';

export enum DzCarouselCardSize {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
}

export interface DzCarouselProps {
  children: ReactNode[];
  swiperProps?: any;
  className?: string;
  size: DzCarouselCardSize;
}
