import React, { ReactNode, useMemo } from 'react';
import { cn } from '../utils/classnames';

/** Number of columns a cell may span */
export type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/** DzColumn number to begin a cell at */
export type ColumnStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**TW classes dymanically applied depending on incoming props. Should be listed to not to be "optimised" */
const displayStyles = {
  block: 'block',
  none: 'hidden',
} as const;
const displayMdStyles = {
  block: 'md:block',
  none: 'md:hidden',
} as const;

const gridColStartStyles = {
  ['1']: 'col-start-1',
  ['2']: 'col-start-2',
  ['3']: 'col-start-3',
  ['4']: 'col-start-4',
  ['5']: 'col-start-5',
  ['6']: 'col-start-6',
  ['7']: 'col-start-7',
  ['8']: 'col-start-8',
  ['9']: 'col-start-9',
  ['10']: 'col-start-10',
  ['11']: 'col-start-11',
  ['12']: 'col-start-12',
  ['auto']: 'col-start-auto',
  ['span 1']: 'col-start-[span_1]',
  ['span 2']: 'col-start-[span_2]',
  ['span 3']: 'col-start-[span_3]',
  ['span 4']: 'col-start-[span_4]',
  ['span 5']: 'col-start-[span_5]',
  ['span 6']: 'col-start-[span_6]',
  ['span 7']: 'col-start-[span_7]',
  ['span 8']: 'col-start-[span_8]',
  ['span 9']: 'col-start-[span_9]',
  ['span 10']: 'col-start-[span_10]',
  ['span 11']: 'col-start-[span_11]',
  ['span 12']: 'col-start-[span_12]',
} as const;
const gridColStartMdStyles = {
  ['1']: 'md:col-start-1',
  ['2']: 'md:col-start-2',
  ['3']: 'md:col-start-3',
  ['4']: 'md:col-start-4',
  ['5']: 'md:col-start-5',
  ['6']: 'md:col-start-6',
  ['7']: 'md:col-start-7',
  ['8']: 'md:col-start-8',
  ['9']: 'md:col-start-9',
  ['10']: 'md:col-start-10',
  ['11']: 'md:col-start-11',
  ['12']: 'md:col-start-12',
  ['auto']: 'md:col-start-auto',
  ['span 1']: 'md:col-start-[span_1]',
  ['span 2']: 'md:col-start-[span_2]',
  ['span 3']: 'md:col-start-[span_3]',
  ['span 4']: 'md:col-start-[span_4]',
  ['span 5']: 'md:col-start-[span_5]',
  ['span 6']: 'md:col-start-[span_6]',
  ['span 7']: 'md:col-start-[span_7]',
  ['span 8']: 'md:col-start-[span_8]',
  ['span 9']: 'md:col-start-[span_9]',
  ['span 10']: 'md:col-start-[span_10]',
  ['span 11']: 'md:col-start-[span_11]',
  ['span 12']: 'md:col-start-[span_12]',
} as const;
const gridColEndStyles = {
  ['span 1']: 'col-end-[span_1]',
  ['span 2']: 'col-end-[span_2]',
  ['span 3']: 'col-end-[span_3]',
  ['span 4']: 'col-end-[span_4]',
  ['span 5']: 'col-end-[span_5]',
  ['span 6']: 'col-end-[span_6]',
  ['span 7']: 'col-end-[span_7]',
  ['span 8']: 'col-end-[span_8]',
  ['span 9']: 'col-end-[span_9]',
  ['span 10']: 'col-end-[span_10]',
  ['span 11']: 'col-end-[span_11]',
  ['span 12']: 'col-end-[span_12]',
  ['-1']: 'col-end-[-1]',
} as const;
const gridColEndMdStyles = {
  ['span 1']: 'md:col-end-[span_1]',
  ['span 2']: 'md:col-end-[span_2]',
  ['span 3']: 'md:col-end-[span_3]',
  ['span 4']: 'md:col-end-[span_4]',
  ['span 5']: 'md:col-end-[span_5]',
  ['span 6']: 'md:col-end-[span_6]',
  ['span 7']: 'md:col-end-[span_7]',
  ['span 8']: 'md:col-end-[span_8]',
  ['span 9']: 'md:col-end-[span_9]',
  ['span 10']: 'md:col-end-[span_10]',
  ['span 11']: 'md:col-end-[span_11]',
  ['span 12']: 'md:col-end-[span_12]',
  ['-1']: 'md:col-end-[-1]',
} as const;

/** The number of columns */
export const NUMBER_OF_COLUMNS = 12;
/** Position of the first column, 1-based */
export const FIRST_COLUMN_POSITION = 1;
/** Position of the last column, 1-based */
export const LAST_COLUMN_POSITION = NUMBER_OF_COLUMNS + 1;
/** Default values for ColumnWrap */
const defaultGridCols = {
  gridColStart: 'auto',
  gridColEnd: '-1',
} as const;

const normalizeValue = <T extends number>({
  left,
  right,
  fallback,
}: {
  left?: T | T[];
  right?: T | T[];
  fallback: T;
}): T[] => {
  if (typeof left === 'undefined') return [] as T[];

  // If we have responsive values for `right`, then we presumably
  // want to keep the `left` the same across them
  if (
    typeof left === 'number' &&
    typeof right !== 'number' &&
    typeof right !== 'undefined'
  ) {
    return [left];
  }

  // If we have a single value for `left`, collapse it to full-width at
  // the mobile breakpoint, otherwise respect the responsive values.
  return typeof left === 'number' ? [fallback, left] : left;
};

const valueAtOrLast = <T extends unknown>(xs: T[], i: number) => {
  return xs[i] !== null && xs[i] !== undefined ? xs[i] : xs[xs.length - 1];
};

export interface ColumnCell {
  /** number (between 1 and 12) of columns to span */
  span?: ColumnSpan | ColumnSpan[];
  /** number (between 1 and 12) of columns to begin at */
  start?: ColumnStart | ColumnStart[];
}

export const calculateGridColumn = ({
  span: columnSpan,
  start: columnStart,
}: ColumnCell) => {
  const spans = normalizeValue({
    left: columnSpan,
    right: columnStart,
    fallback: NUMBER_OF_COLUMNS,
  });

  const starts = normalizeValue({
    left: columnStart,
    right: columnSpan,
    fallback: FIRST_COLUMN_POSITION,
  });

  // Nothing set, return default
  if (spans.length === 0 && starts.length === 0) {
    return [];
  }

  // More starts than spans, favor start
  if (starts.length > spans.length) {
    return starts.map((start, i) => {
      const span = valueAtOrLast(spans, i);
      if (span && span + start > LAST_COLUMN_POSITION) {
        throw new Error('`span` and `start` must fit within the grid');
      }
      const gridColStart = start;
      const gridColEnd = span ? `span ${span}` : `-1`;
      return { gridColStart, gridColEnd };
    });
  }

  // Starts and spans, or spans and the only start
  return spans.map((span, i) => {
    const start = valueAtOrLast(starts, i);

    if (start && start + span > LAST_COLUMN_POSITION) {
      throw new Error('`span` and `start` must fit within the grid');
    }

    const gridColStart = start ? start : `span ${span}`;
    const gridColEnd = start ? `span ${span}` : undefined;

    return { gridColStart, gridColEnd };
  });
};

/** Hardcoded list of full-width column spans */
export const GRID_COLUMN_FULL_WIDTHS = [
  '1 / -1',
  '1 / 12',
  '1 / span 12',
  'span 12',
];

export const GUTTER = '1.25rem';

const gridColumnStyles = {
  gridCol: `
    grid
    grid-cols-12
    gap-5
  `,
};

export interface GridColProps extends ColumnProps {
  position?: 'relative' | 'absolute';
}
/**
 * A 12-column fluid grid
 */
export const DzGridColumns = (props: GridColProps) => {
  const { children, className = '', position = 'relative' } = props;
  return (
    <div className={cn(gridColumnStyles.gridCol, className, position)}>
      {children}
    </div>
  );
};

export interface ColumnProps extends ColumnCell, Omit<CellProps, 'gridColumn'> {
  wrap?: boolean;
}
/**
 * A column sits within the GridColumns and spans the columns,
 * sitting between gutters.
 */
export const DzColumn = ({ span, start, wrap, ...rest }: ColumnProps) => {
  const gridColumnValue = useMemo(() => {
    return calculateGridColumn({ span, start });
  }, [span, start]);

  return (
    <>
      <Cell {...rest} gridColumn={gridColumnValue} />
      {wrap && <ColumnWrap gridColumnValue={gridColumnValue} />}
    </>
  );
};

interface CellProps {
  className?: string;
  gridColumn?: ReturnType<typeof calculateGridColumn>;
  display?: string[];
  children?: ReactNode;
}

const Cell = (props: CellProps) => {
  const { children, className = '', gridColumn = [], display = [] } = props;
  const { gridColStart, gridColEnd } = gridColumn[0];
  const { gridColStart: gridColStartMd, gridColEnd: gridColEndMd } =
    gridColumn[1] ?? gridColumn[0];
  const smWrap = display[0] ?? 'block';
  const mdWrap = display[1] ?? display[0] ?? 'block';
  const gridColEndNormalized = gridColEnd ? gridColEndStyles[gridColEnd] : '';
  const gridColEndMdNormalized = gridColEndMd
    ? gridColEndMdStyles[gridColEndMd]
    : '';

  return (
    <div
      className={cn(
        className,
        displayStyles[smWrap],
        displayMdStyles[mdWrap],
        gridColStartStyles[gridColStart],
        gridColStartMdStyles[gridColStartMd],
        gridColEndNormalized,
        gridColEndMdNormalized
      )}
    >
      {children}
    </div>
  );
};

type ColumnWrapProps = {
  gridColumnValue: ReturnType<typeof calculateGridColumn>;
};

const ColumnWrap = ({ gridColumnValue }: ColumnWrapProps) => {
  const parsedValues = gridColumnValue.map(({ gridColStart, gridColEnd }) => {
    return gridColEnd ? `${gridColStart} / ${gridColEnd}` : `${gridColStart}`;
  });

  return (
    <Cell
      gridColumn={[defaultGridCols]}
      display={parsedValues.map(value => {
        return GRID_COLUMN_FULL_WIDTHS.includes(value) ? 'none' : 'block';
      })}
    />
  );
};
