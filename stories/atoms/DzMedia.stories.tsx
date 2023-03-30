import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzMedia, DzMediaProps, MEDIA_TYPES } from '../../src/atoms/DzMedia';
import { vimeoProps } from '../../constants/mocks/DzMedia';

const meta: Meta = {
  title: 'Atoms/Media/DzMedia',
  component: DzMedia,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzMediaProps> = args => <DzMedia {...args} />;

export const DzMediaVimeo = Template.bind({});
DzMediaVimeo.args = {
  type: MEDIA_TYPES.VIDEO,
  videoProps: {
    source: vimeoProps,
    options: {
      enabled: true,
      autoplay: true,
      muted: true,
      resetOnEnd: true,
      clickToPlay: false,
      toggleInvert: false,
      loop: { active: true },
      vimeo: {
        loop: true,
        autoplay: true,
        muted: false,
        gesture: 'media',
        playsinline: true,
        byline: false,
        portrait: false,
        title: false,
        speed: true,
        transparent: false,
        controls: false,
        background: true,
      },
    },
  },
};
