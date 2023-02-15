import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzModalCentered,
  DzModalCenteredProps,
} from '../../src/unstyled/DzModalCentered';

const meta: Meta = {
  title: 'Unstyled/Overlays/Modals/DzModalCentered',
  component: DzModalCentered,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzModalCenteredProps> = args => (
  <DzModalCentered {...args} />
);

export const PrimaryDzModalCentered = Template.bind({});
PrimaryDzModalCentered.args = {};
