import { ReactNode } from 'react';
import {
  DzButtonProps,
  DzLinkProps,
  DzMediaProps,
  SubTitleType,
  TitleType,
} from '../../../atoms';
import { BaseCard } from '../types';

interface PrimaryCTA {
  text: string;
  ctaProps?: DzButtonProps;
}

interface LinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
}

export interface CardContentProps {
  data: CardContentData;
}

export interface CardContentData extends BaseCard {
  media: DzMediaProps;
  category?: string;
  title: string;
  titleType?: TitleType;
  subtitle?: string;
  subtitleType?: SubTitleType;
  secondaryTitle?: string | ReactNode;
  secondarySubtitle?: string;
  description?: string;
  linkCTA?: LinkCTA;
  primaryCTA?: PrimaryCTA;
  hideImage?: boolean;
}