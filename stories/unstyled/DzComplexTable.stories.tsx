import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzCompleteTable,
  DzCompleteTableProps,
} from '../../src/unstyled/DzCompleteTable';
import { people } from '../../constants/mocks/unstyled/DzComplexTable';
const meta: Meta = {
  title: 'Unstyled/Lists/Tables/DzCompleteTable',
  component: DzCompleteTable,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzCompleteTableProps> = args => (
  <DzCompleteTable {...args} />
);

export const PrimaryDzCompleteTable = Template.bind({});
PrimaryDzCompleteTable.args = { people };
