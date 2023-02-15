import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzGridListImage,
  DzGridListImageProps,
} from '../../src/unstyled/DzGridListImage';
import { files } from '../../constants/mocks/unstyled/DzGridListImage';

const meta: Meta = {
  title: 'Unstyled/Lists/Grid/DzGridListImage',
  component: DzGridListImage,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzGridListImageProps> = args => (
  <DzGridListImage {...args} />
);

export const PrimaryDzGridListImage = Template.bind({});
PrimaryDzGridListImage.args = { files };
