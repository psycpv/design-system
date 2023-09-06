import React, { FC, useState, useMemo, useCallback } from 'react';
import {
  DzMedia,
  DzMediaProps,
  DzText,
  MEDIA_ASPECT_RATIOS,
} from '../../atoms';
import { DzFormBuilder } from './DzFormBuilder';
import { cn } from '../../utils/classnames';
import { ChevronLeft } from '../../svgIcons';

export const FORM_FIELD_TYPES = {
  INPUT: 'input',
  SELECT: 'select',
  UPLOADER: 'uploader',
  TEXTBOX: 'textbox',
};

export interface DzFormProps {
  steps: any[];
  mediaProps?: DzMediaProps;
  onSubmit: any;
  showStepsCount?: boolean;
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
  fullContainer: `
    flex-1
  `,
  contextContainer: `
    flex
    gap-2.5
    items-center
    mb-5
  `,
  prevChevron: `
    cursor-pointer
  `,
};

export const DzForm: FC<DzFormProps> = ({
  steps,
  mediaProps,
  onSubmit,
  showStepsCount = true,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsLength = useMemo(() => steps.length, [steps]);
  const stepFormData = useMemo(() => {
    const stepData = steps[currentStep - 1];
    return stepData;
  }, [steps, currentStep]);

  const handleForwardAction = useCallback(() => {
    setCurrentStep(step => step + 1);
  }, []);
  const handlePrevAction = useCallback(() => {
    setCurrentStep(step => step - 1);
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      if (onSubmit) onSubmit();
    },
    [onSubmit]
  );

  return (
    <div className={cn(styles.formContainer)}>
      {mediaProps && (
        <div className={cn(styles.leftContainer)}>
          <DzMedia {...mediaProps} aspectRatio={MEDIA_ASPECT_RATIOS['4:3']} />
        </div>
      )}
      <div
        className={cn(
          mediaProps ? styles.rightContainer : styles.fullContainer
        )}
      >
        {showStepsCount && (
          <div className={cn(styles.contextContainer)}>
            {currentStep > 1 ? (
              <div
                className={cn(styles.prevChevron)}
                onClick={handlePrevAction}
              >
                <ChevronLeft />
              </div>
            ) : null}

            <DzText text={`Step ${currentStep} of ${stepsLength}`} />
          </div>
        )}

        {stepFormData ? (
          <form
            id={stepFormData?.formName}
            name={stepFormData?.formName}
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <DzFormBuilder
              form={stepFormData}
              formAction={handleForwardAction}
              submitAction={() => {}}
            />
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default DzForm;
