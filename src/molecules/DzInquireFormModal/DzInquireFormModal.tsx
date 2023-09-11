import React, { useEffect, useState } from 'react';
import DzForm from '../DzForm/DzForm';
import {
  DzModalContainer,
  DzTitle,
  DzText,
  TEXT_SIZES,
  TITLE_SIZES,
  TEXT_TYPES,
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
}

export const DzInquireFormModal = ({
  isOpen,
  onClose,
  subtitle,
  title,
}: InquireFormModalProps) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<
    boolean | undefined
  >(false);
  const [, setIsBodyScrollLocked] = useLockedBodyScroll(false, 'root');
  // TODO API sending
  const onSubmit = () => {
    setIsSubmitSuccessful(true);
  };

  inquireFormSteps[0].title = title;
  inquireFormSteps[0].primarySubtitle = subtitle;
  inquireFormSteps[0].CTAProps.description = termsAndConditions;

  useEffect(() => setIsBodyScrollLocked(isOpen), [
    isOpen,
    setIsBodyScrollLocked,
  ]);

  return (
    <DzModalContainer isOpen={isOpen} onClose={onClose}>
      <DzForm
        steps={inquireFormSteps}
        onSubmit={onSubmit}
        showStepsCount={false}
        containerClassName="bg-white-100 max-w-[984px] p-[1.25rem]"
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
            </div>
          ) : null
        }
      />
    </DzModalContainer>
  );
};

export default DzInquireFormModal;
