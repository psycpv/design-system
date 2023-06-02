import React, { FC } from 'react';
import { cn } from '../../utils/classnames';
import { DzTitle, TITLE_TYPES } from '../../atoms';

export interface EditorialQuoteProps {
  quote?: string;
  quoteDetail?: string;
}

const styles: any = {
  editorialContainer: `
    flex
    gap-10
    md:gap-5
    w-full
    relative
  `,
  singleQuoteContainer: `
    flex
    flex-col
    mx-auto
    max-w-[57.8125rem]
    text-center
    gap-5
    md:gap-10
  `,
  singleQuote: `
    text-xl
    md:text-xxl
  `,
  quoteDetail: `
    text-sm
    md:text-lg
  `,
};

export const EditorialQuote: FC<EditorialQuoteProps> = ({
  quote,
  quoteDetail,
}) => {
  return (
    <div className={cn(styles.editorialContainer)}>
      <div className={cn(styles.singleQuoteContainer)}>
        <DzTitle
          classNameTitle={cn(styles.singleQuote)}
          titleType={TITLE_TYPES.P}
          title={`”${quote}”`}
        />
        <DzTitle
          classNameTitle={cn(styles.quoteDetail)}
          titleType={TITLE_TYPES.P}
          title={`— ${quoteDetail}`}
        />
      </div>
    </div>
  );
};

export default EditorialQuote;
