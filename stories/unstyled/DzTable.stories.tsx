import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzTable, DzTableProps } from '../../src/unstyled/DzTable';
import { people } from '../../constants/mocks/unstyled/DzTable';
const meta: Meta = {
  title: 'Unstyled/Lists/Tables/DzTable',
  component: DzTable,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTableProps> = args => <DzTable {...args} />;

export const PrimaryDzTable = Template.bind({});
PrimaryDzTable.args = { people };
