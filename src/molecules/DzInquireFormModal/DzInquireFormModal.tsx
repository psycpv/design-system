import React from 'react';
import DzForm from '../DzForm/DzForm';
import { DzModalContainer } from '../../atoms';
import { inquireFormSteps } from './inquireFormSteps';

interface InquireFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DzInquireFormModal = ({
  isOpen,
  onClose,
}: InquireFormModalProps) => {
  // TODO
  const onSubmit = () => {};

  return (
    <DzModalContainer isOpen={isOpen} onClose={onClose}>
      <DzForm
        steps={inquireFormSteps}
        onSubmit={onSubmit}
        showStepsCount={false}
      />
    </DzModalContainer>
  );
};

export default DzInquireFormModal;
