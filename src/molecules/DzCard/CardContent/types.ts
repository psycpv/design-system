import { ReactNode } from 'react';
import {
  DzButtonProps,
  DzLinkProps,
  DzMediaProps,
  SubTitleType,
  TitleType,
} from '../../../atoms';
import { CardSizes } from '..';
import { ColumnSpan } from '../../../layout';

export type CardSizeType = CardSizes | ColumnSpan;

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

export interface CardContentData extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
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
  //    12col or 12  or [Mobile Size, Desktop Size]
  size: CardSizeType | [CardSizeType, CardSizeType];
}
