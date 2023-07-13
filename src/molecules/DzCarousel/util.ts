import { CardSizes } from '../DzCard';
import { DzCarouselCardSize } from './types';

export const OFFSET_AFTER = 20;
export const OFFSET_BEFORE = 20;

/**
 * 12-col grid simulation since slider works with a block display.
 *
 * Element's width is described by the following expresion:
 *
 *    i
 *  ----- * (100% - (OFFSET) + GUTTER) - GUTTER
 *   12
 *
 * where
 * 100%: Total width of the parent container
 * i: element's span. It might have values from 1 to 12.
 * OFFSET: Carousel total offset (OFFSET_BEFORE + OFFSET_AFTER)
 * GUTTER: Spacing between columns in the design system
 *
 *
 * PD: Values are hard-coded because Tailwind JIT compiler cannot generate classes from dynamic strings
 *  */
export const gridColsWidths = {
  1: `w-[calc(0.0833*(100%-40px+1.25rem)-1.25rem)]`,
  2: `w-[calc(0.1667*(100%-40px+1.25rem)-1.25rem)]`,
  3: `w-[calc(0.2500*(100%-40px+1.25rem)-1.25rem)]`,
  4: `w-[calc(0.3333*(100%-40px+1.25rem)-1.25rem)]`,
  5: `w-[calc(0.4167*(100%-40px+1.25rem)-1.25rem)]`,
  6: `w-[calc(0.5000*(100%-40px+1.25rem)-1.25rem)]`,
  7: `w-[calc(0.5833*(100%-40px+1.25rem)-1.25rem)]`,
  8: `w-[calc(0.6667*(100%-40px+1.25rem)-1.25rem)]`,
  9: `w-[calc(0.7500*(100%-40px+1.25rem)-1.25rem)]`,
  10: `w-[calc(0.8333*(100%-40px+1.25rem)-1.25rem)]`,
  11: `w-[calc(0.9167*(100%-40px+1.25rem)-1.25rem)]`,
  12: `w-[calc(1.0000*(100%-40px+1.25rem)-1.25rem)]`,
};

export const gridColsMaxWidth = {
  [DzCarouselCardSize.S]: 'max-w-[30rem]',
  [DzCarouselCardSize.M]: 'max-w-[42.5rem]',
  [DzCarouselCardSize.L]: 'max-w-[53.75rem]',
  [DzCarouselCardSize.XL]: 'max-w-[75rem]',
};

export const cardSizeToCols = {
  [DzCarouselCardSize.S]: 2,
  [DzCarouselCardSize.M]: 3,
  [DzCarouselCardSize.L]: 6,
  [DzCarouselCardSize.XL]: 10,
};

// Temporal solution while we find a way to set Card sizes directly from the carousel
export const carouselSizeToCardSize = {
  [DzCarouselCardSize.S]: CardSizes['2col'],
  [DzCarouselCardSize.M]: CardSizes['3col'],
  [DzCarouselCardSize.L]: CardSizes['6col'],
  [DzCarouselCardSize.XL]: CardSizes['10col'],
};
