import React, { FC, PropsWithChildren, useState } from 'react';
import { DzColumn, DzGridColumns } from '../../layout';
import { useIsSmallWindowSize } from '../../hooks/useIsSmallWindowSize';
import { Disclosure } from '@headlessui/react';
import { cn } from '../../utils/classnames';
import ArrowDown from '../../svgIcons/arrowDown';
import { DzText, TEXT_SIZES } from '../../atoms';
import CheckmarkIcon from '../../svgIcons/checkmark';

export type YearWrapperComponent = FC<PropsWithChildren & { year: number }>;

export interface DzYearSelectorProps {
  startYear?: number;
  endYear?: number;
  onChange?: (selectedYears: Array<number> | number | null) => void;
  isMultiSelect?: boolean;
  selectedYear?: number;
  YearWrapperComponent?: YearWrapperComponent;
}

const DEFAULT_YEARS_RANGE = 30;
export const ALL_YEARS_ID = Number.POSITIVE_INFINITY;

const styles: any = {
  caretIcon: `
    outline-none
    md:outline-transparent
    ml-[1rem]
  `,
  upArrow: `
    rotate-180
  `,
  openButton: `
    flex    
    justify-center
    items-center   
    h-[2.5rem]
  `,
  year: `
    flex
    items-center
    justify-between
    py-[0.625rem]
    cursor-pointer
    select-none
  `,
  gridColumnsContainer: `    
    p-[1.25rem]
  `,
  smallGap: `
    gap-[0.8rem]
  `,
  mediumGap: `
    gap[1.25rem]
  `,
};

const FILTER_BY_YEAR = 'Filter by Year';

const DefaultYearWrapper: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

export const DzYearSelector = ({
  startYear,
  endYear,
  onChange,
  selectedYear = ALL_YEARS_ID,
  isMultiSelect = false,
  YearWrapperComponent = DefaultYearWrapper,
}: DzYearSelectorProps) => {
  const [selectedYears, setSelectedYears] = useState<Array<number>>([
    selectedYear,
  ]);
  const isSmallWindowSize = useIsSmallWindowSize();
  const startingYear = startYear || new Date().getFullYear();
  const endingYear = endYear || startingYear - DEFAULT_YEARS_RANGE;

  if (endingYear > startingYear) {
    throw new Error('Start year must be greater than end year');
  }

  const years = [ALL_YEARS_ID].concat(
    new Array(startingYear - endingYear)
      .fill(null)
      .map((_, index) => startingYear - index)
  );

  const totalColumns = isSmallWindowSize ? 1 : 6;
  const yearCols = new Array(Math.ceil(years.length / totalColumns))
    .fill(null)
    .map((_, i) => {
      return years.slice(i * totalColumns, i * totalColumns + totalColumns);
    });

  const onClickYear = year => {
    const isYearSelected = selectedYears.includes(year);

    if (!isMultiSelect) {
      setSelectedYears(isYearSelected ? [] : [year]);
      onChange?.(isYearSelected ? null : year);
    } else {
      setSelectedYears(selectedYears => {
        const newSelectedYears = isYearSelected
          ? selectedYears.filter(selectedYear => selectedYear !== year)
          : selectedYears.concat(year);

        onChange?.(newSelectedYears);
        return newSelectedYears;
      });
    }
  };

  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={cn(styles.openButton)}>
            <DzText
              text={FILTER_BY_YEAR}
              textSize={
                isSmallWindowSize ? TEXT_SIZES.MEDIUM : TEXT_SIZES.SMALL
              }
            />
            <ArrowDown
              className={cn(styles.caretIcon, open ? styles.upArrow : '')}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <DzGridColumns
              className={cn(
                styles.gridColumnsContainer,
                isSmallWindowSize ? styles.smallGap : styles.mediumGap
              )}
            >
              {yearCols.map((years, index) => (
                <DzColumn span={2} key={`col-${index}`}>
                  {years.map(year => (
                    <div
                      key={year}
                      className={styles.year}
                      onClick={() => onClickYear(year)}
                    >
                      <YearWrapperComponent year={year}>
                        <DzText
                          text={year === ALL_YEARS_ID ? 'All Years' : year}
                          textSize={TEXT_SIZES.SMALL}
                          className={
                            selectedYears.includes(year)
                              ? 'text-black-100'
                              : 'text-black-60'
                          }
                        />
                      </YearWrapperComponent>
                      {selectedYears.includes(year) && <CheckmarkIcon />}
                    </div>
                  ))}
                </DzColumn>
              ))}
            </DzGridColumns>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DzYearSelector;
