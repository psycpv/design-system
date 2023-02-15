import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzInvoiceTable,
  DzInvoiceTableProps,
} from '../../src/unstyled/DzInvoiceTable';
import { projects } from '../../constants/mocks/unstyled/DzInvoiceTable';

const meta: Meta = {
  title: 'Unstyled/Lists/Tables/DzInvoiceTable',
  component: DzInvoiceTable,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzInvoiceTableProps> = args => (
  <DzInvoiceTable {...args} />
);

export const PrimaryDzInvoiceTable = Template.bind({});
PrimaryDzInvoiceTable.args = { projects };
