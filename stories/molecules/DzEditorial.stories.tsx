import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzEditorial,
  DzEditorialProps,
  EDITORIAL_TYPES,
} from '../../src/molecules/DzEditorial/DzEditorial';
import { simple, complex, quote } from '../../constants/mocks/DzEditorial';

const meta: Meta = {
  title: 'Molecules/Content/DzEditorial',
  component: DzEditorial,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzEditorialProps> = args => <DzEditorial {...args} />;

export const DzEditorialSimple = Template.bind({});
DzEditorialSimple.args = { type: EDITORIAL_TYPES.SIMPLE, data: simple };

export const DzEditorialComplexRightImage = Template.bind({});
DzEditorialComplexRightImage.args = { type: EDITORIAL_TYPES.COMPLEX, data: complex };

export const DzEditorialComplexLeftImage = Template.bind({});
DzEditorialComplexLeftImage.args = {
  type: EDITORIAL_TYPES.COMPLEX,
  data: { ...complex, reverse: false },
};

export const DzEditorialQuote = Template.bind({});
DzEditorialQuote.args = { type: EDITORIAL_TYPES.QUOTE, data: quote };