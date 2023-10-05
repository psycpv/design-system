import React, { FC, ReactNode } from 'react';
import { cn } from '../utils/classnames';
import ChevronLeft from '../svgIcons/chevronLeft';
import ChevronRight from '../svgIcons/chevronRight';
import { usePagination, DOTS } from '../hooks/usePagination';

export interface DzPaginationProps {
  prevText: string;
  nextText: string;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange?: Function;
  renderPageNumber: (pageNumber: number) => ReactNode;
}

const styles = {
  paginationContainer: `
    flex
    items-center
    justify-between
    px-4
    sm:px-0
  `,
  underline: `
    decoration-transparent
    duration-300
    ease-in
    underline-offset-[0.375rem]
    decoration-1
    transition-text-decoration
    hover:underline
    hover:decoration-current
    decoration-black-60 
  `,
  previousContainer: `
    inline-flex
    items-center
    pt-4
    pr-1
    text-sm
    font-medium
    text-black-60
    cursor-pointer
    hover:text-black-100
  `,
  dots: `
    inline-flex
    items-center
    border-t-2
    border-transparent
    px-4
    pt-4
    text-sm
    font-medium
    text-black-60
  `,
  selectedPage: `
    inline-flex
    items-center
    px-4
    pt-4
    text-sm
    font-medium
    text-black-100
  `,
  pageNumber: `
    inline-flex
    items-center
    px-4
    pt-4
    text-sm
    cursor-pointer
    font-medium
    text-black-60
    hover:text-black-100
  `,
  nextContainer: `
    inline-flex
    items-center
    pt-4
    pl-1
    text-sm
    font-medium
    text-black-60
    cursor-pointer
    hover:text-black-100
  `,
};

export const DzPagination: FC<DzPaginationProps> = ({
  prevText,
  nextText,
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  renderPageNumber,
}) => {
  const paginationRange = usePagination(totalCount, currentPage, pageSize);
  const onNext = () => onPageChange?.(currentPage + 1);
  const onPrevious = () => onPageChange?.(currentPage - 1);

  return (
    <div className={cn(styles.paginationContainer)}>
      <div className="-mt-px flex w-0 flex-1">
        <div
          className={cn(styles.previousContainer, styles.underline)}
          onClick={onPrevious}
        >
          <ChevronLeft className="mr-3 h-3 w-3" aria-hidden="true" />
          {prevText}
        </div>
      </div>
      <div className="md:-mt-px md:flex">
        {paginationRange.map(page => {
          const selected = page === currentPage;
          if (page === DOTS) {
            return (
              <span key={page} className={cn(styles.dots)}>
                ...
              </span>
            );
          }
          return (
            <div
              className={cn(
                selected ? styles.selectedPage : styles.pageNumber,
                styles.underline
              )}
              key={page}
            >
              {renderPageNumber ? renderPageNumber(page as number) : page}
            </div>
          );
        })}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <div
          className={cn(styles.nextContainer, styles.underline)}
          onClick={onNext}
        >
          {nextText}
          <ChevronRight className="ml-3 h-3 w-3" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default DzPagination;
