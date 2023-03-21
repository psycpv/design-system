import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzTitle,
  DzTitleProps,
  TITLE_TAGS,
  SUBTITLE_TAGS,
  TITLE_SIZE_NAMES,
} from '../../src/atoms/DzTitle';

const meta: Meta = {
  title: 'Atoms/Typography/Title',
  component: DzTitle,
  argTypes: {
    titleSize: {
      control: 'select',
      options: TITLE_SIZE_NAMES,
      defaultValue: TITLE_SIZE_NAMES[0],
    },
    title: { type: 'string', defaultValue: 'Default Title' },
    titleType: {
      control: 'select',
      options: TITLE_TAGS,
      defaultValue: TITLE_TAGS[0],
    },
    subtitleType: {
      control: 'select',
      options: SUBTITLE_TAGS,
      defaultValue: SUBTITLE_TAGS[0],
    },
    classNameTitle: { control: { type: null } },
    classNameSubtitle: { control: { type: null } },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DzTitleProps> = args => <DzTitle {...args} />;

export const DefaultDzTitle = Template.bind({});
