import React, { FC } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  TEXT_SIZES,
  DzTitle,
  TITLE_TYPES,
  TITLE_SIZES,
  DzButton,
  BUTTON_SIZES,
  DzButtonProps,
} from '../../atoms';
import { cn } from '../../utils/classnames';
import { InterstitialSplit, InterstitialSplitProps } from './InterstitialSplit';
import {
  InterstitialFullWidth,
  InterstitialFullWidthProps,
} from './InterstitialFullWidth';

export type TextColors =
  | 'white-100'
  | 'black-100'
  | 'black-80'
  | 'black-60'
  | 'black-40';
export interface DzInterstitialProps {
  data: InterstitialSplitProps | InterstitialFullWidthProps;
}
export interface PrimaryCTAInterstitial {
  text: string;
  ctaProps?: DzButtonProps;
}

export const DzInterstitial: FC<DzInterstitialProps> = ({ data }) => {
  const { split = false } = data;
  if (split) {
    return <InterstitialSplit {...data} />;
  }
  return <InterstitialFullWidth {...data} />;
};

export default DzInterstitial;
