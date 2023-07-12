import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzSectionMenu,
  DzSectionMenuProps,
} from '../../src/molecules/DzSectionsMenu';
import { data } from '../../constants/mocks/DzSectionMenu';

const meta: Meta = {
  title: 'Molecules/Content/DzSectionMenu',
  component: DzSectionMenu,
  argTypes: {
    onSelection: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzSectionMenuProps> = args => <DzSectionMenu {...args} />;

export const sectionMenu = Template.bind({});
sectionMenu.args = data;
