import React, { FC } from 'react';
import { cn } from '../utils/classnames';

export const LABEL_VARIANTS = {
  BLACK: 'black',
  GREY: 'grey',
};

export const LABEL_VARIANTS_NAMES = [
  LABEL_VARIANTS.BLACK,
  LABEL_VARIANTS.GREY,
] as const;

export type LabelVariant = typeof LABEL_VARIANTS_NAMES[number];
export interface DzLabelProps {
  title: string;
  variant?: LabelVariant;
  className?: any;
}
const styles = {
  label: `
    px-2.5
    py-0.5
    text-xs
  `,
  black: `
    text-white-100
    bg-black-100
  `,
  grey: `
    bg-black-10
    text-black-100
  `,
};
export const DzLabel: FC<DzLabelProps> = ({
  title = '',
  variant = LABEL_VARIANTS.BLACK,
  className = '',
}) => {
  return (
    <label className={cn(styles.label, styles?.[variant], className)}>
      {title}
    </label>
  );
};

export default DzLabel;
