import '../tailwind.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'dzFigmaGrey',
    values: [
      {
        name: 'dzFigmaGrey',
        value: '#E5E5E5',
      },
      {
        name: 'dzFigmaBlack',
        value: '#000000',
      },
      {
        name: 'dzFigmaWhite',
        value: '#FFFFFF',
      },
    ],
  },
  viewport: {
    viewports: {
      largeDesktop: {
        name: 'Large Desktop 12 col',
        styles: {
          width: '1440px',
          height: "100%",
        },
      },
      desktop: {
        name: 'Desktop 12 col',
        styles: {
          width: '1024px',
          height: "100%",
        },
      },
      tablet: {
        name: 'Tablet device',
        styles: {
          width: '768px',
          height: "100%",
        },
      },
      smallDevice: {
        name: 'Small device',
        styles: {
          width: '576px',
          height: "100%",
        },
      },
      extraSmallDevice: {
        name: 'Extra small device',
        styles: {
          width: '320px',
          height: "100%",
        },
      },
      ...INITIAL_VIEWPORTS
    },
  },
};
