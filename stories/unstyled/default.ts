import React from 'react';
import { Meta, Story } from '@storybook/react';
import { xxx , xxxProps} from '../../src/unstyled/xxx';
import { yyy } from '../../constants/mocks/unstyled/xxx';

const meta: Meta = {
  title: 'Unstyled/Category/xxx',
  component: xxx,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<xxxProps> = args => <xxx {...args}/>

export const Primaryxxx = Template.bind({});
Primaryxxx.args = {yyy };