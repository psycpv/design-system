import { useState } from 'react';

export const useDZInquireFormModalProps = () => {
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const openClickHandler = () => setIsInquireOpen(true);
  const onInquireClose = () => setIsInquireOpen(false);

  return {
    isInquireOpen,
    openClickHandler,
    onInquireClose,
  };
};
