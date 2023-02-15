import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzNavSearch , DzNavSearchProps} from '../../src/unstyled/DzNavSearch';

const meta: Meta = {
  title: 'Unstyled/Navigation/NavBars/DzNavSearch',
  component: DzNavSearch,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzNavSearchProps> = args => <DzNavSearch {...args}/>

export const PrimaryDzNavSearch = Template.bind({});
PrimaryDzNavSearch.args = { };