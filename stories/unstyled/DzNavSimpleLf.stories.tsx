import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzNavSimpleLf , DzNavSimpleLfProps} from '../../src/unstyled/DzNavSimpleLf';

const meta: Meta = {
  title: 'Unstyled/Navigation/NavBars/DzNavSimpleLf',
  component: DzNavSimpleLf,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzNavSimpleLfProps> = args => <DzNavSimpleLf {...args}/>

export const PrimaryDzNavSimpleLf = Template.bind({});
PrimaryDzNavSimpleLf.args = { };