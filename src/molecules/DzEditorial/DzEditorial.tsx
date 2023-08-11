import React, { FC } from 'react';

import { EditorialComplex, EditorialComplexProps } from './EditorialComplex';
import { EditorialSimple, EditorialSimpleProps } from './EditorialSimple';
import { EditorialQuote, EditorialQuoteProps } from './EditorialQuote';
export { EDITORIAL_TEXT_TYPES, EDITORIAL_TEXT_NAMES } from './EditorialText';

export const EDITORIAL_TYPES = {
  SIMPLE: 'simple',
  COMPLEX: 'complex',
  QUOTE: 'quote',
};

export const EDITORIAL_TYPES_NAMES = [
  EDITORIAL_TYPES.SIMPLE,
  EDITORIAL_TYPES.COMPLEX,
  EDITORIAL_TYPES.QUOTE,
] as const;

export type EditorialType = typeof EDITORIAL_TYPES_NAMES[number];
export type DzEditorialDataType =
  | EditorialComplexProps
  | EditorialSimpleProps
  | EditorialQuoteProps;

export interface DzEditorialProps {
  type: EditorialType;
  data: DzEditorialDataType;
  isWide?: boolean;
}

export const DzEditorial: FC<DzEditorialProps> = ({
  type,
  data,
  isWide = true,
}) => {
  if (type === EDITORIAL_TYPES.SIMPLE) {
    const { paragraphs = [] } = (data as EditorialSimpleProps) ?? {};
    return <EditorialSimple paragraphs={paragraphs} />;
  }
  if (type === EDITORIAL_TYPES.COMPLEX) {
    const {
      media,
      paragraphs = [],
      reverse = false,
    } = (data as EditorialComplexProps) ?? {};
    return (
      <EditorialComplex
        media={media}
        paragraphs={paragraphs}
        reverse={reverse}
        isWide={isWide}
      />
    );
  }

  const { quote, quoteDetail } = (data as EditorialQuoteProps) ?? {};

  return <EditorialQuote quote={quote} quoteDetail={quoteDetail} />;
};

export default DzEditorial;
