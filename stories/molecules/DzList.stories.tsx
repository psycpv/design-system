import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzList, DzListProps } from '../../src/molecules/DzList';
import { items } from '../../constants/mocks/DzList';

const meta: Meta = {
  title: 'Molecules/Content/DzList',
  component: DzList,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzListProps> = args => <DzList {...args} />;

export const PrimaryDzList = Template.bind({});
PrimaryDzList.args = { list: items, sort: true };
