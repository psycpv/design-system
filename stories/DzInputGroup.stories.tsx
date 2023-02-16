import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzInputGroups,
  DzInputGroupProps,
  TYPES,
  INPUT_GROUP_TYPES
} from '../src/atoms/DzInputGroup';
import { INPUT_GROUPS_MOCK } from '../constants/mocks/DzInputGroup';

const meta: Meta = {
  title: 'Atoms/Buttons, Radio Buttons & Check Boxes/InputGroup',
  component: DzInputGroups,
  argTypes: {
    type :{ control: 'select', options: INPUT_GROUP_TYPES },
    title: { type: 'string', defaultValue: 'Title' },
    subtitle: { type: 'string', defaultValue: 'Subtitle copy' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzInputGroupProps> = args => <DzInputGroups {...args} />;

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = { type: TYPES.CHECKBOX, items: INPUT_GROUPS_MOCK };

export const RadiobuttonGroup = Template.bind({});
RadiobuttonGroup.args = { type: TYPES.RADIO, items: INPUT_GROUPS_MOCK };
