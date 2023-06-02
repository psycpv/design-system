import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzFileUploader , DzFileUploaderProps} from '../../src/atoms/DzFileUploader';

const meta: Meta = {
  title: 'Atoms/Files/DzFileUploader',
  component: DzFileUploader,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzFileUploaderProps> = args => <DzFileUploader {...args}/>

export const PrimaryDzFileUploader = Template.bind({});
PrimaryDzFileUploader.args = { };