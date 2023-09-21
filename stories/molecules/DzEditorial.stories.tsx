import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzEditorial,
  DzEditorialProps,
  EditorialType,
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
DzEditorialSimple.args = { type: EditorialType.SIMPLE, data: simple };

export const DzEditorialComplexRightImage = Template.bind({});
DzEditorialComplexRightImage.args = {
  type: EditorialType.COMPLEX,
  data: complex,
};

export const DzEditorialComplexLeftImage = Template.bind({});
DzEditorialComplexLeftImage.args = {
  type: EditorialType.COMPLEX,
  data: { ...complex, reverse: false },
};

export const DzEditorialQuote = Template.bind({});
DzEditorialQuote.args = { type: EditorialType.QUOTE, data: quote };

export const DzEditorialLeftBlock = Template.bind({});
DzEditorialLeftBlock.args = {
  type: EditorialType.LEFT_BLOCK,
  data: simple,
  isWide: true,
};
