import React from 'react';
import { useState } from 'react';
import DzFormModal from './DzFormModal';
import { FORM_MODAL_TYPE_NAMES } from './types/DzFormModalTypes';

interface UseDzFormModalProps {
  formType: typeof FORM_MODAL_TYPE_NAMES[number];
  onSubmit: (formValues: any) => Promise<any>;
  title: string;
  subtitle: string;
  successTitle?: string;
  successSubtitle?: string;
  errorTitle?: string;
  errorSubtitle?: string;
  disableBackdrop?: boolean;
}
export const useDzFormModal = ({
  formType,
  onSubmit,
  title,
  subtitle,
  successTitle,
  successSubtitle,
  errorTitle,
  errorSubtitle,
  disableBackdrop,
}: UseDzFormModalProps) => {
  const [isOpen, setIsOpen] = useState(disableBackdrop || false);
  const openClickHandler = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const FormModal = (
    <DzFormModal
      title={title}
      subtitle={subtitle}
      successTitle={successTitle}
      successSubtitle={successSubtitle}
      errorTitle={errorTitle}
      errorSubtitle={errorSubtitle}
      isOpen={isOpen}
      onClose={onClose}
      type={formType}
      onSubmit={onSubmit}
      disableBackdrop={disableBackdrop}
    />
  );

  return {
    FormModal,
    openClickHandler,
  };
};
