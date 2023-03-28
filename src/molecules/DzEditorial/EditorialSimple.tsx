import React, { FC } from 'react';
import { EditorialText, EditorialTextProps } from './EditorialText';
import { cn } from '../../utils/classnames';

export interface EditorialSimpleProps extends EditorialTextProps {}

const styles: any = {
  editorialContainer: `
    flex
    gap-10
    md:gap-5
    w-full
    relative
    scrollbar-w-none
  `,
  rightPane: `
    basis-1/2
    flex
    flex-col
    gap-5
  `,
};

export const EditorialSimple: FC<EditorialSimpleProps> = ({ paragraphs }) => {
  return (
    <div className={cn(styles.editorialContainer)}>
      <div className={cn(styles.rightPane, 'mx-auto')}>
        <EditorialText paragraphs={paragraphs} />
      </div>
    </div>
  );
};

export default EditorialSimple;
