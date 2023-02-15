import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzPaginationCentered , DzPaginationCenteredProps} from '../../src/unstyled/DzPaginationCentered';

const meta: Meta = {
  title: 'Unstyled/Navigation/Pagination/DzPaginationCentered',
  component: DzPaginationCentered,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzPaginationCenteredProps> = args => <DzPaginationCentered {...args}/>

export const PrimaryDzPaginationCentered = Template.bind({});
PrimaryDzPaginationCentered.args = { };