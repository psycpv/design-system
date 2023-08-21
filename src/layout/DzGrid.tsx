import React, { ReactNode, useMemo } from 'react';
import { cn } from '../utils/classnames';
import {
  DisplayMdStyles,
  DisplayStyles,
  GRID_COLUMN_FULL_WIDTHS,
  defaultGridCols,
  gridColEndMdStyles,
  gridColEndStyles,
  gridColStartMdStyles,
  gridColStartStyles,
  gridColumnStyles,
} from './constants';

/** Number of columns a cell may span */
export type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/** DzColumn number to begin a cell at */
export type ColumnStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/** The number of columns */
export const NUMBER_OF_COLUMNS = 12;
/** Position of the first column, 1-based */
export const FIRST_COLUMN_POSITION = 1;
/** Position of the last column, 1-based */
export const LAST_COLUMN_POSITION = NUMBER_OF_COLUMNS + 1;

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
  display?: Array<keyof typeof DisplayStyles>;
  children?: ReactNode;
}

const Cell = (props: CellProps) => {
  const { children, className = '', gridColumn = [], display = [] } = props;
  const { gridColStart, gridColEnd } = gridColumn[0];
  const { gridColStart: gridColStartMd, gridColEnd: gridColEndMd } =
    gridColumn[1] ?? gridColumn[0];
  const defaultWrapVisibility = 'block';
  const smWrap = display[0] ?? defaultWrapVisibility;
  const mdWrap = display[1] ?? display[0] ?? defaultWrapVisibility;
  const gridColEndNormalized = gridColEnd ? gridColEndStyles[gridColEnd] : '';
  const gridColEndMdNormalized = gridColEndMd
    ? gridColEndMdStyles[gridColEndMd]
    : '';

  return (
    <div
      className={cn(
        className,
        DisplayStyles[smWrap],
        DisplayMdStyles[mdWrap],
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
  const displayValues = gridColumnValue.map(({ gridColStart, gridColEnd }) => {
    const parsedValues = gridColEnd
      ? `${gridColStart} / ${gridColEnd}`
      : `${gridColStart}`;
    return GRID_COLUMN_FULL_WIDTHS.includes(parsedValues) ? 'none' : 'block';
  });

  return <Cell gridColumn={[defaultGridCols]} display={displayValues} />;
};
