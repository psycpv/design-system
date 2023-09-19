import React, { FC } from 'react';

import { EditorialComplex, EditorialComplexProps } from './EditorialComplex';
import { EditorialSimple, EditorialSimpleProps } from './EditorialSimple';
import { EditorialQuote, EditorialQuoteProps } from './EditorialQuote';
export { EDITORIAL_TEXT_TYPES, EDITORIAL_TEXT_NAMES } from './EditorialText';

export enum EditorialType {
  SIMPLE = 'simple',
  COMPLEX = 'complex',
  QUOTE = 'quote',
  LEFT_BLOCK = 'leftBlock',
}

export const EDITORIAL_TYPES_NAMES = [
  EditorialType.SIMPLE,
  EditorialType.COMPLEX,
  EditorialType.QUOTE,
] as const;

export type DzEditorialDataType =
  | EditorialComplexProps
  | EditorialSimpleProps
  | EditorialQuoteProps;

export interface DzEditorialProps {
  type: EditorialType;
  data: DzEditorialDataType;
}

export const DzEditorial: FC<DzEditorialProps> = ({ type, data }) => {
  if (type === EditorialType.SIMPLE) {
    const { paragraphs = [] } = (data as EditorialSimpleProps) ?? {};
    return <EditorialSimple paragraphs={paragraphs} />;
  }
  if (type === EditorialType.LEFT_BLOCK) {
    const { paragraphs = [] } = (data as EditorialSimpleProps) ?? {};
    return <EditorialSimple paragraphs={paragraphs} isWide />;
  }
  if (type === EditorialType.COMPLEX) {
    const { media, paragraphs = [], reverse = false } =
      (data as EditorialComplexProps) ?? {};
    return (
      <EditorialComplex
        media={media}
        paragraphs={paragraphs}
        reverse={reverse}
      />
    );
  }

  return <EditorialQuote {...(data as EditorialQuoteProps)} />;
};

export default DzEditorial;
