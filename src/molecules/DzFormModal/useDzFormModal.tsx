import React from 'react';
import { useState } from 'react';
import DzFormModal from './DzFormModal';
import { FORM_MODAL_TYPE_NAMES } from './types/DzFormModalTypes';

export const useDzFormModal = ({
  formType,
  onSubmit,
  title,
  subtitle,
  disableBackdrop,
}: {
  formType: typeof FORM_MODAL_TYPE_NAMES[number];
  onSubmit: (formValues: any) => Promise<any>;
  title: string;
  subtitle: string;
  disableBackdrop?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const openClickHandler = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const FormModal = (
    <DzFormModal
      title={title}
      subtitle={subtitle}
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
