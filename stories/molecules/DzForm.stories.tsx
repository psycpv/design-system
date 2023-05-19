import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzForm, DzFormProps } from '../../src/molecules/DzForm/DzForm';
import { steps, mediaProps } from '../../constants/mocks/DzForm';

const meta: Meta = {
  title: 'Molecules/Content/DzForm',
  component: DzForm,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzFormProps> = args => <DzForm {...args} />;

export const PrimaryDzForm = Template.bind({});
PrimaryDzForm.args = { steps, mediaProps };
