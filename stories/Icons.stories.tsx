import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconProps } from '../src/svgIcons/types';
import { ArrowLeft } from '../src/svgIcons/arrowLeft';
import { ArrowRight } from '../src/svgIcons/arrowRight';
import { Checkmark } from '../src/svgIcons/checkmark';
import { ChevronLeft } from '../src/svgIcons/chevronLeft';
import { ChevronRight } from '../src/svgIcons/chevronRight';
import { Menu } from '../src/svgIcons/menu';
import { BoldArrowDown } from '../src/svgIcons/boldArrowDown';
import { Close } from '../src/svgIcons/close';
import { ExclamationCircle } from '../src/svgIcons/exclamationCircle';
import { ArrowDown } from '../src/svgIcons/arrowDown';

const ICONS = {
  ARROW_LEFT: 'arrowLeft',
  ARROW_RIGHT: 'arrowRight',
  ARROW_DOWN: 'arrowDown',
  CHECKMARK: 'checkmark',
  CHEVRON_LEFT: 'chevron-left',
  CHEVRON_RIGHT: 'chevron-right',
  MENU: 'menu',
  BOLD_ARROW_DOWN: 'boldArrowDown',
  CLOSE: 'close',
  EXCLAMATION_CIRCLE: 'exclamationCircle',
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
    },
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
    case ICONS.BOLD_ARROW_DOWN:
      return <BoldArrowDown {...args} />;
    case ICONS.CLOSE:
      return <Close {...args} />;
    case ICONS.EXCLAMATION_CIRCLE:
      return <ExclamationCircle {...args} />;
    case ICONS.ARROW_DOWN:
      return <ArrowDown {...args} />;
    default:
      throw new Error('Type not supported');
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

export const BoldArrowDownIcon = Template.bind({});
BoldArrowDownIcon.args = { type: ICONS.BOLD_ARROW_DOWN, width: 20, height: 12 };

export const CloseIcon = Template.bind({});
CloseIcon.args = { type: ICONS.CLOSE, width: 24, height: 22 };

export const ExclamationCircleIcon = Template.bind({});
ExclamationCircleIcon.args = {
  type: ICONS.EXCLAMATION_CIRCLE,
  width: 32,
  height: 32,
};

export const ArrowDownIcon = Template.bind({});
ArrowDownIcon.args = { type: ICONS.ARROW_DOWN, width: 20, height: 12 };
