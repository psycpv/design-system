import React from 'react';
import { useState } from 'react';
import DzFormModal from './DzFormModal';
import { FORM_MODAL_TYPE_NAMES } from './types/DzFormModalTypes';

export const useDzFormModal = ({
  formType,
  onSubmit,
  title,
  subtitle,
}: {
  formType: typeof FORM_MODAL_TYPE_NAMES[number];
  onSubmit: (formValues: any) => Promise<any>;
  title: string;
  subtitle: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
    />
  );

  return {
    FormModal,
    openClickHandler,
  };
};
