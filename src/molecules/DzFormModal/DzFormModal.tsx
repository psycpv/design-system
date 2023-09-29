import React, { ReactNode, useEffect, useState } from 'react';
import DzForm from '../DzForm/DzForm';
import { DzModalContainer } from '../../atoms';
import { termsAndConditions } from './termsAndConditions';
import useLockedBodyScroll from '../../hooks/useLockedBodyScroll';
import ResultOverlay from './ResultOverlay';
import {
  FORM_MODAL_TYPE_NAMES,
  FORM_MODAL_TYPES,
} from './types/DzFormModalTypes';
import { inquireFormSteps } from './formSteps/inquireFormSteps';

export interface DzFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  onSubmit: (formValues: Record<string, any>) => Promise<any>;
  type: typeof FORM_MODAL_TYPE_NAMES[number];
  recaptchaNode?: ReactNode;
}

export interface SubmissionResult {
  isSuccess: boolean;
  error?: string;
}

const FORM_TYPES_TO_STEPS = {
  [FORM_MODAL_TYPES.INQUIRE]: inquireFormSteps,
};

export const DzFormModal = ({
  isOpen,
  onClose,
  subtitle,
  title,
  onSubmit,
  recaptchaNode,
  type,
}: DzFormModalProps) => {
  const formSteps = FORM_TYPES_TO_STEPS[type];
  const [submittedFormValues, setSubmittedFormValues] = useState<
    Record<string, any>
  >();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<
    boolean | undefined
  >(undefined);
  const [, setIsBodyScrollLocked] = useLockedBodyScroll(false, 'root');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmitForm = (formValues: Record<string, any>) => {
    setSubmittedFormValues(formValues);
    doSubmit(formValues);
  };
  const onCloseModal = () => {
    onClose();
  };
  const onClickRetry = () => {
    if (submittedFormValues) {
      doSubmit(submittedFormValues);
    }
  };
  const doSubmit = (formValues: Record<string, any>) => {
    setIsSubmitting(true);
    setIsSubmitSuccessful(undefined);
    onSubmit(formValues)
      .then((result: SubmissionResult) => {
        setIsSubmitSuccessful(true);
        if (result.isSuccess) {
          setIsSubmitSuccessful(true);
        } else {
          setIsSubmitSuccessful(false);
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => setIsBodyScrollLocked(isOpen), [
    isOpen,
    setIsBodyScrollLocked,
  ]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitSuccessful(undefined);
      setSubmittedFormValues(undefined);
    }
  }, [isOpen]);

  formSteps[0].title = title;
  formSteps[0].primarySubtitle = subtitle;
  formSteps[0].CTAProps.description = termsAndConditions;

  return (
    <DzModalContainer
      isOpen={isOpen}
      onClose={onCloseModal}
      className={
        isSubmitSuccessful === false
          ? 'border-[1px] border-red-100 border-opacity-25'
          : ''
      }
    >
      <DzForm
        steps={formSteps}
        onSubmit={onSubmitForm}
        showStepsCount={false}
        recaptchaNode={recaptchaNode}
        containerClassName="bg-white-100 max-w-[984px]"
        isSubmitDisabled={isSubmitting}
        overlayContent={
          isSubmitSuccessful !== undefined ? (
            <ResultOverlay
              isSuccess={isSubmitSuccessful}
              onClickClose={onCloseModal}
              onClickRetry={onClickRetry}
            />
          ) : null
        }
      />
    </DzModalContainer>
  );
};

export default DzFormModal;
