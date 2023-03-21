import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzModalPopover,
  DzModalPopoverProps,
} from '../../src/atoms/DzModalPopover';

const meta: Meta = {
  title: 'Atoms/Helpers/DzModalPopover',
  component: DzModalPopover,
  argTypes: {
    title: { type: 'string', defaultValue: 'Message Title' },
    description: {
      type: 'string',
      defaultValue:
        'This is placeholder text. Ut sodales nunc vitae est lacinia, nec tempus risus aliquam. Vestibulum sollicitudin eget tellus ac venenatis. ',
    },
    onClickPrimary: { action: 'primary clicked' },
    onClickSecondary: { action: 'secondary clicked' },
    onClickClose: { action: 'close clicked' },
    hideButtons: { type: 'boolean', defaultValue: false },
    primaryBtnText: { type: 'string', defaultValue: 'Inline Button' },
    primaryBtnProps: { control: 'object' },
    secondaryBtnProps: { control: 'object' },
    secondaryBtnText: { type: 'string', defaultValue: 'Button' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzModalPopoverProps> = args => (
  <DzModalPopover {...args} />
);

export const PrimaryDzModalPopover = Template.bind({});
PrimaryDzModalPopover.args = {};
