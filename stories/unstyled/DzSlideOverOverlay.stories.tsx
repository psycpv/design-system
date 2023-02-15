import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzSlideOverOverlay,
  DzSlideOverOverlayProps,
} from '../../src/unstyled/DzSlideOverOverlay';

const meta: Meta = {
  title: 'Unstyled/Overlays/SlideOvers/DzSlideOverOverlay',
  component: DzSlideOverOverlay,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzSlideOverOverlayProps> = args => (
  <DzSlideOverOverlay {...args} />
);

export const PrimaryDzSlideOverOverlay = Template.bind({});
PrimaryDzSlideOverOverlay.args = {};
