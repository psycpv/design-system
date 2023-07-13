import { BUTTON_VARIANTS } from '../../src/atoms/DzButton';

export const data = {
  sections: [
    { text: 'Survey', id: 'survey' },
    { text: 'Available Works', id: 'available-works' },
    { text: 'Exhibitions', id: 'exhibitions' },
    { text: 'Guide', id: 'guide' },
    { text: 'Biography', id: 'biography' },
    { text: 'Selected Press', id: 'selected-press' },
    { text: 'Books', id: 'books' },
  ],
  cta: {
    text: 'Inquire',
    ctaProps: {
      variant: BUTTON_VARIANTS.TERTIARY,
    },
  },
};
