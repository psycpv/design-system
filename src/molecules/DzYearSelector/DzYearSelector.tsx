import React, { useState } from 'react';
import { DzColumn, DzGridColumns } from '../../layout';
import { useIsSmallWindowSize } from '../../hooks/useIsSmallWindowSize';

export interface DzYearSelectorProps {
  startYear?: number;
  endYear?: number;
}

const DEFAULT_YEARS_RANGE = 30;
const ALL_YEARS_ID = Number.POSITIVE_INFINITY;

export const DzYearSelector = ({ startYear, endYear }: DzYearSelectorProps) => {
  const [selectedYears, setSelectedYears] = useState<Array<number | string>>(
    []
  );
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
    setSelectedYears(selectedYears =>
      selectedYears.includes(year)
        ? selectedYears.filter(selectedYear => selectedYear !== year)
        : selectedYears.concat(year)
    );
  };

  return (
    <div>
      <DzGridColumns>
        {yearCols.map(years => (
          <DzColumn span={2}>
            {years.map(year => (
              <div key={year} onClick={() => onClickYear(year)}>
                {year === ALL_YEARS_ID ? 'All Years' : year}
              </div>
            ))}
          </DzColumn>
        ))}
      </DzGridColumns>
    </div>
  );
};

export default DzYearSelector;
