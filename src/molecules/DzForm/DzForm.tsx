import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
  containerClassName?: string;
  successContent?: ReactNode;
  isSubmitDisabled?: boolean;
}

const styles: any = {
  formContainer: `
    relative
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
  successContainer: `
    top-0
    left-0
    absolute
    bg-white-100
    w-full
    h-full
  `,
};

export const DzForm: FC<DzFormProps> = ({
  steps,
  mediaProps,
  onSubmit,
  showStepsCount = true,
  containerClassName,
  successContent,
  isSubmitDisabled = false,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const stepsLength = useMemo(() => steps.length, [steps]);

  const stepFormData = useMemo(() => {
    return steps[currentStep - 1];
  }, [steps, currentStep]);

  const [fieldValidityStates, setFieldValidityStates] = useState<
    Record<string | number, boolean>
  >({});

  const [
    areAllCurrentStepFieldsValid,
    setAreAllCurrentStepFieldsValid,
  ] = useState(false);

  const doSubmit = useCallback(() => {
    onSubmit?.(formValues);
  }, [formValues, onSubmit]);

  const handleForwardAction = useCallback(() => {
    if (currentStep === stepsLength) {
      doSubmit();
    } else {
      setFieldValidityStates({});
      setCurrentStep(step => step + 1);
    }
  }, [currentStep, doSubmit, stepsLength]);

  const handlePrevAction = useCallback(() => {
    setFieldValidityStates({});
    setCurrentStep(step => step - 1);
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      doSubmit();
    },
    [onSubmit, doSubmit]
  );

  const onFieldValidation = (fieldId: string | number, isValid: boolean) => {
    setFieldValidityStates(currentStates => ({
      ...currentStates,
      [fieldId]: isValid,
    }));
  };

  const onChangeInput = (fieldName: string, value: any) => {
    setFormValues(currentFormValues => ({
      ...currentFormValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setAreAllCurrentStepFieldsValid(
      Object.values(fieldValidityStates).reduce(
        (allFieldsValidity, isFieldValid) => allFieldsValidity && isFieldValid,
        true
      )
    );
  }, [fieldValidityStates]);

  return (
    <div className={cn(styles.formContainer, containerClassName || '')}>
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
              onFieldValidation={onFieldValidation}
              isSubmitDisabled={
                isSubmitDisabled || !areAllCurrentStepFieldsValid
              }
              onChangeInput={onChangeInput}
              submitAction={() => {
                console.info('TODO submitAction');
              }}
            />
          </form>
        ) : null}
        {successContent && (
          <div className={cn(styles.successContainer)}>{successContent}</div>
        )}
      </div>
    </div>
  );
};

export default DzForm;
