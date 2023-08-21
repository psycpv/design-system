/**TW classes dymanically applied depending on incoming props. Should be listed to not to be "optimised" */
export enum DisplayStyles {
  block = 'block',
  none = 'hidden',
}
export enum DisplayMdStyles {
  block = 'md:block',
  none = 'md:hidden',
}

export const gridColStartStyles = {
  '1': 'col-start-1',
  '2': 'col-start-2',
  '3': 'col-start-3',
  '4': 'col-start-4',
  '5': 'col-start-5',
  '6': 'col-start-6',
  '7': 'col-start-7',
  '8': 'col-start-8',
  '9': 'col-start-9',
  '10': 'col-start-10',
  '11': 'col-start-11',
  '12': 'col-start-12',
  auto: 'col-start-auto',
  'span 1': 'col-start-[span_1]',
  'span 2': 'col-start-[span_2]',
  'span 3': 'col-start-[span_3]',
  'span 4': 'col-start-[span_4]',
  'span 5': 'col-start-[span_5]',
  'span 6': 'col-start-[span_6]',
  'span 7': 'col-start-[span_7]',
  'span 8': 'col-start-[span_8]',
  'span 9': 'col-start-[span_9]',
  'span 10': 'col-start-[span_10]',
  'span 11': 'col-start-[span_11]',
  'span 12': 'col-start-[span_12]',
} as const;

export const gridColStartMdStyles = {
  '1': 'md:col-start-1',
  '2': 'md:col-start-2',
  '3': 'md:col-start-3',
  '4': 'md:col-start-4',
  '5': 'md:col-start-5',
  '6': 'md:col-start-6',
  '7': 'md:col-start-7',
  '8': 'md:col-start-8',
  '9': 'md:col-start-9',
  '10': 'md:col-start-10',
  '11': 'md:col-start-11',
  '12': 'md:col-start-12',
  auto: 'md:col-start-auto',
  'span 1': 'md:col-start-[span_1]',
  'span 2': 'md:col-start-[span_2]',
  'span 3': 'md:col-start-[span_3]',
  'span 4': 'md:col-start-[span_4]',
  'span 5': 'md:col-start-[span_5]',
  'span 6': 'md:col-start-[span_6]',
  'span 7': 'md:col-start-[span_7]',
  'span 8': 'md:col-start-[span_8]',
  'span 9': 'md:col-start-[span_9]',
  'span 10': 'md:col-start-[span_10]',
  'span 11': 'md:col-start-[span_11]',
  'span 12': 'md:col-start-[span_12]',
} as const;

export const gridColEndStyles = {
  'span 1': 'col-end-[span_1]',
  'span 2': 'col-end-[span_2]',
  'span 3': 'col-end-[span_3]',
  'span 4': 'col-end-[span_4]',
  'span 5': 'col-end-[span_5]',
  'span 6': 'col-end-[span_6]',
  'span 7': 'col-end-[span_7]',
  'span 8': 'col-end-[span_8]',
  'span 9': 'col-end-[span_9]',
  'span 10': 'col-end-[span_10]',
  'span 11': 'col-end-[span_11]',
  'span 12': 'col-end-[span_12]',
  '-1': 'col-end-[-1]',
} as const;

export const gridColEndMdStyles = {
  'span 1': 'md:col-end-[span_1]',
  'span 2': 'md:col-end-[span_2]',
  'span 3': 'md:col-end-[span_3]',
  'span 4': 'md:col-end-[span_4]',
  'span 5': 'md:col-end-[span_5]',
  'span 6': 'md:col-end-[span_6]',
  'span 7': 'md:col-end-[span_7]',
  'span 8': 'md:col-end-[span_8]',
  'span 9': 'md:col-end-[span_9]',
  'span 10': 'md:col-end-[span_10]',
  'span 11': 'md:col-end-[span_11]',
  'span 12': 'md:col-end-[span_12]',
  '-1': 'md:col-end-[-1]',
} as const;

/** Default values for ColumnWrap */
export const defaultGridCols = {
  gridColStart: 'auto',
  gridColEnd: '-1',
} as const;

export const gridColumnStyles = {
  gridCol: `
    grid
    grid-cols-12
    gap-5
  `,
};

/** Hardcoded list of full-width column spans */
export const GRID_COLUMN_FULL_WIDTHS = [
  '1 / -1',
  '1 / 12',
  '1 / span 12',
  'span 12',
];
