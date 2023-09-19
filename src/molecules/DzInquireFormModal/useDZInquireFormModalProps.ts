import { useState } from 'react';

export interface InquireFormContextData {
  id?: string;
  title?: string;
  artwork?: Record<string, any>;
}

export const useDZInquireFormModalProps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contextData, setContextData] = useState<
    InquireFormContextData | undefined | null
  >();
  const openClickHandler = (contextData?: InquireFormContextData) => {
    setIsOpen(true);
    setContextData(contextData);
  };
  const onClose = () => {
    setIsOpen(false);
    setContextData(null);
  };

  return {
    contextData,
    isOpen,
    openClickHandler,
    onClose,
  };
};
