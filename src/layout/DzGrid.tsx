import React, { ReactNode, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { cn } from '../utils/classnames';

export interface ColumnCell {
  /** number (between 1 and 12) of columns to span */
  span?: ColumnSpan | ColumnSpan[];
  /** number (between 1 and 12) of columns to begin at */
  start?: ColumnStart | ColumnStart[];
}

interface InnerCell {
  gridColumn?: string[];
  display?: string[];
  children?: ReactNode;
}

interface CellProps extends InnerCell {
  className?: string;
}

export interface GridColProps extends ColumnProps {
  position?: 'relative' | 'absolute';
}

export interface ColumnProps extends ColumnCell, CellProps {
  wrap?: boolean;
}

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
      return span ? `${start} / span ${span}` : `${start} / -1`;
    });
  }

  // Starts and spans, or spans and the only start
  return spans.map((span, i) => {
    const start = valueAtOrLast(starts, i);

    if (start && start + span > LAST_COLUMN_POSITION) {
      throw new Error('`span` and `start` must fit within the grid');
    }

    return start ? `${start} / span ${span}` : `span ${span}`;
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

/**
 * A 12-column fluid grid
 */
export const DzGridColumns: React.FC<GridColProps> = ({
  children,
  className = '',
  position = 'relative',
}) => {
  return (
    <div className={cn(gridColumnStyles.gridCol, className, position)}>
      {children}
    </div>
  );
};

/**
 * A column sits within the GridColumns and spans the columns,
 * sitting between gutters.
 */
export const DzColumn: React.FC<ColumnProps> = ({
  span,
  start,
  wrap,
  ...rest
}) => {
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

const InnerCell = styled.div<InnerCell>`
  ${(props: any) => {
    return css`
      grid-column: ${props.gridColumn[1]};
      display: ${props.display[1]};
    `;
  }};

  @media (max-width: 768px) {
    ${(props: any) => {
      return css`
        grid-column: ${props.gridColumn[0]};
        display: ${props.display[0]};
      `;
    }};
  }
`;

const Cell: React.FC<CellProps> = ({
  children,
  className = '',
  gridColumn = [],
  display = [],
}) => {
  const smCol = gridColumn[0];
  const mdCol = gridColumn[1] ?? gridColumn[0];
  const smWrap = display[0] ?? 'block';
  const mdWrap = display[1] ?? display[0] ?? 'block';

  return (
    <InnerCell
      className={cn(className)}
      gridColumn={[smCol, mdCol]}
      display={[smWrap, mdWrap]}
    >
      {children}
    </InnerCell>
  );
};

const ColumnWrap: React.FC<{ gridColumnValue: string[] }> = ({
  gridColumnValue,
}) => {
  return (
    <Cell
      gridColumn={['auto / -1']}
      display={gridColumnValue.map(value => {
        return GRID_COLUMN_FULL_WIDTHS.includes(value) ? 'none' : 'block';
      })}
    />
  );
};
