import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzGridListContactCard,
  DzGridListContactCardProps,
} from '../../src/unstyled/DzGridListContactCard';
import { people } from '../../constants/mocks/unstyled/DzGridListContactCard';
const meta: Meta = {
  title: 'Unstyled/Lists/Grid/DzGridListContactCard',
  component: DzGridListContactCard,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzGridListContactCardProps> = args => (
  <DzGridListContactCard {...args} />
);

export const PrimaryDzGridListContactCard = Template.bind({});
PrimaryDzGridListContactCard.args = { people };
