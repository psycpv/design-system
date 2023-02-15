import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzPagination , DzPaginationProps} from '../../src/unstyled/DzPagination';

const meta: Meta = {
  title: 'Unstyled/Navigation/Pagination/DzPagination',
  component: DzPagination,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPaginationProps> = args => <DzPagination {...args}/>

export const PrimaryDzPagination = Template.bind({});
PrimaryDzPagination.args = { };