import '../tailwind.css';
import 'plyr-react/plyr.css';
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
        name: 'Desktop 1440px',
        styles: {
          width: '1472px',
          height: '100%',
        },
      },
      desktop: {
        name: 'Desktop 1024px',
        styles: {
          width: '1056px',
          height: '100%',
        },
      },
      tablet: {
        name: 'Tablet device 768px',
        styles: {
          width: '800px',
          height: '100%',
        },
      },
      smallDevice: {
        name: 'Small device 576px',
        styles: {
          width: '608px',
          height: '100%',
        },
      },
      extraSmallDevice: {
        name: 'Extra small device 320px',
        styles: {
          width: '352px',
          height: '100%',
        },
      },
      ...INITIAL_VIEWPORTS,
    },
  },
};
