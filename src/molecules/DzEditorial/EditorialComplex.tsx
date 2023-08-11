import React, { FC } from 'react';
import { cn } from '../../utils/classnames';
import { DzMedia, DzMediaProps } from '../../atoms';
import { EditorialText, EditorialTextProps } from './EditorialText';

export interface EditorialComplexProps extends EditorialTextProps {
  media?: DzMediaProps;
  reverse?: boolean;
  isWide?: boolean
}

const styles: any = {
  editorialContainer: `
    flex
    flex-col
    md:flex-row
    w-full
    relative
    scroll-smooth
    whitespace-pre-wrap
  `,
  leftPane: `
    basis-1/2
    relative
    md:sticky
    top-0
    h-fit
    pt-10
  `,
  rightPane: `
    flex
    flex-col
    basis-1/2
  `,
  leftPaneDesktop: `
    basis-1/3
  `,
  rightPaneDesktop: `
    basis-2/3
  `
};

export const EditorialComplex: FC<EditorialComplexProps> = ({
  media,
  paragraphs,
  reverse = false,
  isWide = false
}) => {
  return (
    <div
      className={cn(
        styles.editorialContainer,
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      {media ? (
        <div className={cn(styles.leftPane, isWide ? styles.leftPaneDesktop : '')}>
          <DzMedia {...media} />
        </div>
      ) : null}
      <div className={cn(styles.rightPane, isWide ? styles.rightPaneDesktop : '')}>
        <EditorialText paragraphs={paragraphs} />
      </div>
    </div>
  );
};

export default EditorialComplex;
