import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzGridListSimpleCards,
  DzGridListSimpleCardsProps,
} from '../../src/unstyled/DzGridListSimpleCards';
import { projects } from '../../constants/mocks/unstyled/DzGridListSimpleCards';

const meta: Meta = {
  title: 'Unstyled/Lists/Grid/DzGridListSimpleCards',
  component: DzGridListSimpleCards,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzGridListSimpleCardsProps> = args => (
  <DzGridListSimpleCards {...args} />
);

export const PrimaryDzGridListSimpleCards = Template.bind({});
PrimaryDzGridListSimpleCards.args = { projects };
