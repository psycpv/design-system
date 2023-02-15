import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzSlideOver , DzSlideOverProps} from '../../src/unstyled/DzSlideOver';

const meta: Meta = {
  title: 'Unstyled/Overlays/SlideOvers/DzSlideOver',
  component: DzSlideOver,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzSlideOverProps> = args => <DzSlideOver {...args}/>

export const PrimaryDzSlideOver = Template.bind({});
PrimaryDzSlideOver.args = { };