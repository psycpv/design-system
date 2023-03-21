import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DzPagination, DzPaginationProps } from '../../src/atoms/DzPagination';

const meta: Meta = {
  title: 'Atoms/Controls/DzPagination',
  component: DzPagination,
  argTypes: {
    prevText: { type: 'string', defaultValue: 'Prev' },
    nextText: { type: 'string', defaultValue: 'Next' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPaginationProps> = args => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <DzPagination
      {...args}
      currentPage={currentPage}
      onPageChange={page => setCurrentPage(page)}
    />
  );
};

export const PrimaryDzPagination = Template.bind({});
PrimaryDzPagination.args = {
  totalCount: 100,
  siblingCount: 1,
  pageSize: 4,
};
