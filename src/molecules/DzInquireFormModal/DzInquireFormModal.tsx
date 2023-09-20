import React, { ReactNode, useEffect, useState } from 'react';
import DzForm from '../DzForm/DzForm';
import { DzModalContainer } from '../../atoms';
import { inquireFormSteps } from './inquireFormSteps';
import { InquireFormContextData } from './useDZInquireFormModalProps';
import { termsAndConditions } from './termsAndConditions';
import useLockedBodyScroll from '../../hooks/useLockedBodyScroll';
import ResultOverlay from './ResultOverlay';

export interface InquireFormModalProps {
  contextData?: InquireFormContextData | null;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  onSubmit: (formValues: Record<string, any>) => Promise<any>;
  recaptchaNode?: ReactNode;
}

export interface SubmissionResult {
  isSuccess: boolean;
  error?: string;
}

export const DzInquireFormModal = ({
  isOpen,
  onClose,
  subtitle,
  title,
  onSubmit,
  recaptchaNode,
}: InquireFormModalProps) => {
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
    setIsSubmitSuccessful(undefined);
    setSubmittedFormValues(undefined);
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

  inquireFormSteps[0].title = title;
  inquireFormSteps[0].primarySubtitle = subtitle;
  inquireFormSteps[0].CTAProps.description = termsAndConditions;

  useEffect(() => setIsBodyScrollLocked(isOpen), [
    isOpen,
    setIsBodyScrollLocked,
  ]);

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
        steps={inquireFormSteps}
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

export default DzInquireFormModal;
