import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconProps } from '../src/svgIcons/types';
import { ArrowLeft } from '../src/svgIcons/arrowLeft';
import { ArrowRight } from '../src/svgIcons/arrowRight';
import { Checkmark } from '../src/svgIcons/checkmark';
import { ChevronLeft } from '../src/svgIcons/chevronLeft';
import { ChevronRight } from '../src/svgIcons/chevronRight';
import { Menu } from '../src/svgIcons/menu';

const ICONS = {
  ARROW_LEFT: 'arrowLeft',
  ARROW_RIGHT: 'arrowRight',
  CHECKMARK: 'checkmark',
  CHEVRON_LEFT: 'chevron-left',
  CHEVRON_RIGHT: 'chevron-right',
  MENU: 'menu',
};

const meta: Meta = {
  title: 'Atoms/Icons/svgs',
  component: ArrowLeft,
  argTypes: {
    type: { control: 'select', options: Object.values(ICONS) },
    ref: {
      control: {
        type: null,
      },
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IconProps> = args => {
  switch (args.type) {
    case ICONS.ARROW_LEFT:
      return <ArrowLeft {...args} />;
    case ICONS.ARROW_RIGHT:
      return <ArrowRight {...args} />;
    case ICONS.CHECKMARK:
      return <Checkmark {...args} />;
    case ICONS.CHEVRON_LEFT:
      return <ChevronLeft {...args} />;
    case ICONS.CHEVRON_RIGHT:
      return <ChevronRight {...args} />;
    case ICONS.MENU:
      return <Menu {...args} />;
    default:
      return null;
  }
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = { type: ICONS.ARROW_LEFT, width: 24, height: 16 };

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = { type: ICONS.ARROW_RIGHT, width: 24, height: 16 };

export const CheckmarkIcon = Template.bind({});
CheckmarkIcon.args = { type: ICONS.CHECKMARK, width: 28, height: 20 };

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = { type: ICONS.CHEVRON_LEFT, width: 12, height: 22 };

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = { type: ICONS.CHEVRON_RIGHT, width: 12, height: 22 };

export const MenuIcon = Template.bind({});
MenuIcon.args = { type: ICONS.MENU, width: 36, height: 36 };
