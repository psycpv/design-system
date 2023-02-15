import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DzModal, DzModalProps } from '../../src/unstyled/DzModal';

const meta: Meta = {
  title: 'Unstyled/Overlays/Modals/DzModal',
  component: DzModal,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzModalProps> = args => <DzModal {...args} />;

export const PrimaryDzModal = Template.bind({});
PrimaryDzModal.args = {};
