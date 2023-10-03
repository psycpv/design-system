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
import { FormStep } from '../DzFormModal/formSteps/types/formStep';

export const FORM_FIELD_TYPES = {
  INPUT: 'input',
  SELECT: 'select',
  UPLOADER: 'uploader',
  TEXTBOX: 'textbox',
  CHECKBOX: 'checkbox',
};

export interface DzFormProps {
  steps: Array<FormStep>;
  mediaProps?: DzMediaProps;
  onSubmit: any;
  showStepsCount?: boolean;
  containerClassName?: string;
  titleTextClassName?: string;
  subtitleTextClassName?: string;
  overlayContent?: ReactNode;
  isSubmitDisabled?: boolean;
  recaptchaNode?: ReactNode;
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
  overlayContainer: `
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
  overlayContent,
  isSubmitDisabled = false,
  titleTextClassName,
  subtitleTextClassName,
  recaptchaNode,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<Record<string, any>>(() => {
    // TODO initial values for all steps, currently only supported for first step
    const initialValues = steps?.[0]?.formSections?.[0]?.fields?.reduce(
      (values, { name, initialValue }) => {
        if (initialValue) {
          values[name] = initialValue;
        }
        return values;
      },
      {}
    );
    return initialValues || {};
  });
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
    [doSubmit]
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
            {recaptchaNode}
            <DzFormBuilder
              form={stepFormData}
              formAction={handleForwardAction}
              onFieldValidation={onFieldValidation}
              isSubmitDisabled={
                isSubmitDisabled || !areAllCurrentStepFieldsValid
              }
              onChangeInput={onChangeInput}
              formValues={formValues}
              submitAction={() => {
                console.info('TODO submitAction');
              }}
              titleTextClassName={titleTextClassName}
              subtitleTextClassName={subtitleTextClassName}
            />
          </form>
        ) : null}
        {overlayContent && (
          <div className={cn(styles.overlayContainer)}>{overlayContent}</div>
        )}
      </div>
    </div>
  );
};

export default DzForm;
