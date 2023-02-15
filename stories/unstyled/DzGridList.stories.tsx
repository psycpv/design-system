import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzGridList, DzGridListProps } from '../../src/unstyled/DzGridList';
import { people } from '../../constants/mocks/unstyled/DzGridList';

const meta: Meta = {
  title: 'Unstyled/Lists/Grid/DzGridList',
  component: DzGridList,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzGridListProps> = args => <DzGridList {...args} />;

export const PrimaryDzGridList = Template.bind({});
PrimaryDzGridList.args = { people };
