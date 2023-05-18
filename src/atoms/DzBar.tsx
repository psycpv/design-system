import React, {
  FC,
  InputHTMLAttributes,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';
import { cn } from '../utils/classnames';
import { DzText, TEXT_TYPES } from './DzText';
import { v4 as uuidv4 } from 'uuid';

export const BAR_VARIANTS = {
  PROGRESS: 'progress',
  CAROUSEL_PROGRESS: 'carouselProgress',
  CAROUSEL_TAB: 'carouselTab',
  SLIDER: 'slider',
};
import { DzRange, RangeProps } from './DzRange';

export const BAR_VARIANT_NAMES = [
  BAR_VARIANTS.PROGRESS,
  BAR_VARIANTS.CAROUSEL_PROGRESS,
  BAR_VARIANTS.CAROUSEL_TAB,
  BAR_VARIANTS.SLIDER,
] as const;
export interface DzBarProps {
  variant?: BarVariant;
  label?: string;
  customId?: string;
  maxProgress?: number;
  valueProgress?: number;
  rangeProps?: RangeProps;
  tabBarSteps?: number;
  activeTab?: number;
  onChangeRange?:(range: number[]) => void

}
export type BarVariant = typeof BAR_VARIANT_NAMES[number];
interface StyledInputRange extends InputHTMLAttributes<HTMLInputElement> {
  runnableTrackValue: string | number;
}

export const ColorSlider = styled.input<StyledInputRange>`
  -webkit-appearance: none;
  appearance: none;
  height: 0.1875rem;
  width: 100%;
  background-color: #e8e8e8;
  border-radius: 0.1875rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -1em;
    appearance: none;
    height: 32px;
    width: 32px;
    background: #ffffff;
    border-radius: 100%;
    cursor: pointer;
    border: 1px solid #e8e8e8;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    max-width: ${({ runnableTrackValue }) => runnableTrackValue}%;
    width: 100%;
    background-color: #757575;
    outline: none;
    height: 0.1875rem;
    border-radius: 0.1875rem;
  }
`;

const styles = {
  progressContainer: `
    h-[0.1875rem]
    w-full 
    bg-black-20
    rounded-[0.1875rem]
    mb-4
  `,
  progress: `
    bg-black-60
    h-[0.1875rem]
    rounded-[0.1875rem]
  `,
  range: `
    w-full
    mb-6
    bg-black-20
    rounded-[0.1875rem]
    appearance-none
    cursor-pointer
    h-[0.1875rem]
  `,
  currentTab:`
    !bg-black-100
  `,
  tabStep:`
    block
    h-px
    w-full
    bg-black-40
    hover:bg-black-80
  `

};

export const DzBar: FC<DzBarProps> = ({
  variant = BAR_VARIANTS.PROGRESS,
  label = '',
  customId = uuidv4(),
  maxProgress = 100,
  valueProgress = 0,
  rangeProps = {
    min: 0,
    max: 100,
    step: 0,
  },
  tabBarSteps = 5,
  activeTab = 0,
  onChangeRange = () => null,
}) => {

  const [currentTab, setCurrentTab] = useState<number>(activeTab);
  useEffect(()=> {setCurrentTab(activeTab)}, [activeTab])
  
  if (variant === BAR_VARIANTS.PROGRESS) {
    return (
      <>
        <DzText
          className="sr-only"
          htmlFor={customId}
          textType={TEXT_TYPES.LABEL}
          text={label || 'Progress Bar'}
        />
        <div className={cn(styles.progressContainer)}>
          <div
            id={customId}
            className={cn(styles.progress)}
            style={{ width: `${(valueProgress * 100) / maxProgress ?? 100}%` }}
          ></div>
        </div>
      </>
    );
  }

  if (variant === BAR_VARIANTS.CAROUSEL_PROGRESS) {
    return (
      <>
        <DzText
          className="sr-only"
          htmlFor={customId}
          textType={TEXT_TYPES.LABEL}
          text={label || 'Progress Bar'}
        />
        <div className={cn(styles.progressContainer)}>
          <div
            id={customId}
            className={cn(styles.progress)}
            style={{ width: `${(valueProgress * 100) / maxProgress ?? 100}%` }}
          ></div>
        </div>
      </>
    );
  }

  if (variant === BAR_VARIANTS.SLIDER) {
    return <DzRange onChange={onChangeRange} {...rangeProps} doubleRange/>;
  }
  
  if(variant === BAR_VARIANTS.CAROUSEL_TAB){
    const steps = Array.from(Array(tabBarSteps).keys())
    const currentTabStyle = (step: number)=> step === currentTab? styles.currentTab: '';
    return (
      <div className="flex items-center justify-center" aria-label="Progress">
        <ol role="list" className="ml-8 flex items-center gap-5 w-full">
          {steps.map((step) => (
            <li key={step} onClick={()=>setCurrentTab(step)} className="flex w-full py-2.5 cursor-pointer">
                <div className={cn(styles.tabStep,currentTabStyle(step) )}>
                  <span className="sr-only">{step}</span>
                </div>
              
            </li>
          ))}
        </ol>
      </div>
    )
  }
  return <></>;
};

export default DzBar;
