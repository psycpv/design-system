import React, { FC, useState, useMemo, useCallback, Fragment } from 'react';
import { DzGridColumns, DzColumn, ColumnSpan } from '../../layout';
import { DzRange, DzText } from '../../atoms';
import { DataCardType, DzCard, CARD_TYPES } from '../../molecules';
import { cn } from '../../utils/classnames';
import { FourSquares } from '../../svgIcons/four-squares';
import { SixSquares } from '../../svgIcons/six-squares';
import { EightSquares } from '../../svgIcons/eight-squares';
import { BREAKPOINTS } from '../../layout/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';

interface StepInterface {
  id: number;
  numberOfColumns: number;
  icon: JSX.Element;
}

export interface DzComplexGridProps {
  cards: DataCardType[];
  steps?: StepInterface[];
  displayNumberOfResults?: boolean;
  headingTitle?: string;
}

const MINIMUM_VALUE = 1;
const INITIAL_VALUE = 1;
const STEPS_SPAN = 1;

const styles: any = {
  headControls: `
    flex
    justify-between
    items-center
    md:mb-10
    mb-5
  `,
  rangeContainer: `
    flex
    gap-2.5
    items-center
    ml-auto
  `,
  range: `
    w-[6.25rem]
  `,
  representation: `
    w-2.5
    h-2.5
    bg-black-100
  `,
};

const DEFAULT_STEPS = [
  {
    id: 1,
    numberOfColumns: 1,
    icon: <div className={cn(styles.representation)}></div>,
  },
  {
    id: 2,
    numberOfColumns: 2,
    icon: <FourSquares />,
  },
  {
    id: 3,
    numberOfColumns: 3,
    icon: <SixSquares />,
  },
  {
    id: 4,
    numberOfColumns: 4,
    icon: <EightSquares />,
  },
];

export const DzComplexGrid: FC<DzComplexGridProps> = ({
  cards,
  steps = DEFAULT_STEPS,
  headingTitle = 'Artworks',
  displayNumberOfResults = false,
}) => {
  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width < BREAKPOINTS.MD;
  }, [width]);

  const [stepValue, setStepValue] = useState(MINIMUM_VALUE);
  const maxRange = useMemo(() => steps.length, [steps]);
  const numberOfResults = useMemo(() => cards.length, [cards]);
  const columnsSpanPerRow = useMemo(() => {
    const { numberOfColumns } = steps.find(step => step.id === stepValue) ?? {};
    const stepToDivide = numberOfColumns ?? stepValue;
    if (stepToDivide === 0) return 12;
    if (stepToDivide > 12) return 1;
    return Math.round(12 / stepToDivide) as ColumnSpan;
  }, [stepValue, steps]);

  const CurrentIcon = useMemo(() => {
    const { icon } = steps.find(step => step.id === stepValue) ?? {
      icon: <Fragment />,
    };
    return icon;
  }, [steps, stepValue]);

  const handleChange = useCallback(currentStep => {
    const [_, step] = currentStep;
    setStepValue(step);
  }, []);

  return (
    <div>
      <div className={cn(styles.headControls)}>
        {displayNumberOfResults ? (
          <DzText text={`${numberOfResults} ${headingTitle}`} />
        ) : null}

        {!isMobile ? (
          <div className={cn(styles.rangeContainer)}>
            <div className={cn(styles.range)}>
              <DzRange
                min={MINIMUM_VALUE}
                max={maxRange}
                step={STEPS_SPAN}
                value={[MINIMUM_VALUE, INITIAL_VALUE]}
                onChange={handleChange}
              />
            </div>
            {CurrentIcon}
          </div>
        ) : null}
      </div>

      <DzGridColumns
        className={
          columnsSpanPerRow === 12
            ? 'gap-y-[3.75rem] md:gap-y-[7.5rem]'
            : 'gap-y-[3.75rem]'
        }
      >
        {cards.map(card => {
          return (
            <DzColumn span={columnsSpanPerRow}>
              <DzCard type={CARD_TYPES.ARTWORK} data={card} />
            </DzColumn>
          );
        })}
      </DzGridColumns>
    </div>
  );
};

export default DzComplexGrid;
