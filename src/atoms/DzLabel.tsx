import React, { FC } from 'react';
import { cn } from '../utils/classnames';
export interface DzLabelProps {
  title: string;
}
const styles = {
  label: `
    px-2.5
    py-0.5
    text-white-100
    bg-black-100
    hover:bg-black-10
    hover:text-black-100
  `,
};
export const DzLabel: FC<DzLabelProps> = ({ title = '' }) => {
  return <label className={cn(styles.label)}>{title}</label>;
};

export default DzLabel;
