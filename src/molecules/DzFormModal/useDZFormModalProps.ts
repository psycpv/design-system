import { useState } from 'react';

export const INQUIRY_TYPES = {
  AVAILABLE_ARTWORKS: 'availableArtworks',
  ARTIST: 'artist',
  EXHIBITION: 'exhibition',
};

export const INQUIRY_TYPE_NAMES = [
  INQUIRY_TYPES.AVAILABLE_ARTWORKS,
  INQUIRY_TYPES.ARTIST,
  INQUIRY_TYPES.EXHIBITION,
];

export type InquiryType = typeof INQUIRY_TYPE_NAMES[number];

export interface InquireFormContextData {
  id?: string;
  title?: string;
  artwork?: Record<string, any>;
  ctaText?: string;
  inquiryType: InquiryType;
}

export const useDZFormModalProps = () => {
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
