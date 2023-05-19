import React, { FC, useState, useMemo, useCallback } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  MEDIA_ASPECT_RATIOS,
} from '../../atoms';
import { DzFormBuilder } from './DzFormBuilder';

export interface DzFormProps {
  steps: any[];
  mediaProps: DzMediaProps;
}
const styles: any = {
  formContainer: `
    flex
    flex-col
    gap-5
    md:flex-row
  `,
  leftContainer: `
    md:basis-1/2
  `,
  rightContainer: `
    md:basis-1/2
  `,
  stepsTitle:`
    mb-5
  `
};

export const DzForm: FC<DzFormProps> = ({ steps, mediaProps }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsLength = useMemo(() => steps.length, [steps]);
  const stepFormData = useMemo(() => {
    const stepData = steps[currentStep - 1];
    return stepData;
  }, [steps, currentStep]);
  const handleFormAction = useCallback((...args) => {
    setCurrentStep(step => step + 1);
  }, []);

  return (
    <div className={styles.formContainer}>
      <div className={styles.leftContainer}>
        <DzMedia {...mediaProps} aspectRatio={MEDIA_ASPECT_RATIOS['4:3']} />
      </div>
      <div className={styles.rightContainer}>
        <DzText text={`Step ${currentStep} of ${stepsLength}`} className={styles.stepsTitle}/>
        {stepFormData ? (
          <DzFormBuilder form={stepFormData} formAction={handleFormAction} />
        ) : null}
      </div>
    </div>
  );
};

export default DzForm;
