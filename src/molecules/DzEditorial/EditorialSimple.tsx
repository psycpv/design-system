import React, { FC } from 'react';
import { EditorialText, EditorialTextProps } from './EditorialText';
import { cn } from '../../utils/classnames';

export interface EditorialSimpleProps extends EditorialTextProps {
  isWide?: boolean;
}

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
  rightPaneWide: `
    basis-2/3
  `
};

export const EditorialSimple: FC<EditorialSimpleProps> = ({ paragraphs, isWide = false}) => {
  return (
    <div className={cn(styles.editorialContainer)}>
      <div className={cn(styles.rightPane, isWide ? styles.rightPaneWide : 'mx-auto')}>
        <EditorialText paragraphs={paragraphs} />
      </div>
    </div>
  );
};

export default EditorialSimple;
