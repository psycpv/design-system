import React, { useEffect, useState } from 'react';
import DzForm from '../DzForm/DzForm';
import {
  DzModalContainer,
  DzTitle,
  DzText,
  TEXT_SIZES,
  TITLE_SIZES,
  TEXT_TYPES,
  DzButton,
  BUTTON_SIZES,
} from '../../atoms';
import { inquireFormSteps } from './inquireFormSteps';
import { TITLE_TYPES } from '../../atoms';
import { InquireFormContextData } from './useDZInquireFormModalProps';
import { termsAndConditions } from './termsAndConditions';
import useLockedBodyScroll from '../../hooks/useLockedBodyScroll';

interface InquireFormModalProps {
  contextData?: InquireFormContextData | null;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  onSubmit: (formValues: Record<string, any>) => Promise<any>;
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
}: InquireFormModalProps) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<
    boolean | undefined
  >(false);
  const [, setIsBodyScrollLocked] = useLockedBodyScroll(false, 'root');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmitForm = (formValues: Record<string, any>) => {
    setIsSubmitting(true);
    onSubmit(formValues)
      .then((result: SubmissionResult) => {
        if (result.isSuccess) {
          setIsSubmitSuccessful(true);
        } else {
          alert('TODO error screen');
        }
      })
      .finally(() => setIsSubmitting(false));
  };
  const onCloseModal = () => {
    setIsSubmitSuccessful(false);
    onClose();
  };

  inquireFormSteps[0].title = title;
  inquireFormSteps[0].primarySubtitle = subtitle;
  inquireFormSteps[0].CTAProps.description = termsAndConditions;

  useEffect(() => setIsBodyScrollLocked(isOpen), [
    isOpen,
    setIsBodyScrollLocked,
  ]);

  return (
    <DzModalContainer isOpen={isOpen} onClose={onCloseModal}>
      <DzForm
        steps={inquireFormSteps}
        onSubmit={onSubmitForm}
        showStepsCount={false}
        containerClassName="bg-white-100 max-w-[984px]"
        isSubmitDisabled={isSubmitting}
        successContent={
          isSubmitSuccessful ? (
            <div className="bg-white-100 p-[1.25rem]">
              <DzTitle
                title="Thank you for your inquiry."
                titleType={TITLE_TYPES.H1}
                titleSize={TITLE_SIZES.XXL}
              />
              <DzText
                text="Your message has been received and a member of our team will be in touch shortly."
                textType={TEXT_TYPES.P}
                textSize={TEXT_SIZES.MEDIUM}
                className="mt-[0.625rem]"
              />
              <div className="absolute bottom-0 right-0 w-full md:w-[50%]">
                <DzButton
                  size={BUTTON_SIZES.LARGE}
                  onClick={onCloseModal}
                  className="w-full"
                >
                  Close
                </DzButton>
              </div>
            </div>
          ) : null
        }
      />
    </DzModalContainer>
  );
};

export default DzInquireFormModal;
