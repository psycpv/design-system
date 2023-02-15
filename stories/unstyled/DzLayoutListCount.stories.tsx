import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzLayoutListCont,
  DzLayoutListContProps,
} from '../../src/unstyled/DzLayoutListCont';
import { items } from '../../constants/mocks/unstyled/DzLayoutListCont';

const meta: Meta = {
  title: 'Unstyled/Layouts/ListContainers/DzLayoutListCont',
  component: DzLayoutListCont,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzLayoutListContProps> = args => (
  <DzLayoutListCont {...args} />
);

export const PrimaryDzLayoutListCont = Template.bind({});
PrimaryDzLayoutListCont.args = { items };
