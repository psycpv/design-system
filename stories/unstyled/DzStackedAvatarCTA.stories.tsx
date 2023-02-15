import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzStackedAvatarCTA,
  DzStackedAvatarCTAProps,
} from '../../src/unstyled/DzStackedAvatarCTA';
import { people } from '../../constants/mocks/unstyled/DzStackedAvatarCTA';

const meta: Meta = {
  title: 'Unstyled/Lists/StackedLists/DzStackedAvatarCTA',
  component: DzStackedAvatarCTA,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzStackedAvatarCTAProps> = args => (
  <DzStackedAvatarCTA {...args} />
);

export const PrimaryDzStackedAvatarCTA = Template.bind({});
PrimaryDzStackedAvatarCTA.args = { people };
