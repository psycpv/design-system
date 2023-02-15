import '../tailwind.css';
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
};
