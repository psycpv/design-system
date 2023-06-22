import { ColumnSpan } from '../../layout';
import { CardSizeType } from './CardContent';

export enum CardSizes {
  '12col' = '12col',
  '10col' = '10col',
  '6col' = '6col',
  '4col' = '4col',
  '3col' = '3col',
  '2col' = '2col',
}

export const spanToCardSize = (span: ColumnSpan): CardSizes => {
  if (span < 1 || span > 12) throw Error('Span not supported');

  const map = {
    1: CardSizes['2col'],
    2: CardSizes['2col'],
    3: CardSizes['3col'],
    4: CardSizes['4col'],
    5: CardSizes['4col'],
    6: CardSizes['6col'],
    7: CardSizes['6col'],
    8: CardSizes['6col'],
    9: CardSizes['6col'],
    10: CardSizes['10col'],
    11: CardSizes['10col'],
    12: CardSizes['12col'],
  };

  return map[span];
};

export const typeToSize = (size: CardSizeType): CardSizes =>
  typeof size === 'number' ? spanToCardSize(size) : size;
