import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DzModal, DzModalProps } from '../../src/atoms/DzModal';
import { child1, child2 } from '../../constants/mocks/DzModal';
import { DzButton } from '../../src/atoms/DzButton';

const meta: Meta = {
  title: 'Atoms/Modals/DzModal',
  component: DzModal,
  argTypes: {
    title: { type: 'string', defaultValue: 'Modal Title' },
    buttonText: { type: 'string', defaultValue: 'Confirm' },
    onClickPrimary: { action: 'Clicked Primary' },
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzModalProps> = args => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {!open ? (
        <DzButton onClick={() => setOpen(true)}>Open Modal</DzButton>
      ) : null}
      <DzModal
        {...args}
        isOpen={open}
        onClickClose={setOpen}
      >
        <p>{child2}</p>
      </DzModal>
    </>
  );
};

export const PrimaryDzModal = Template.bind({});
PrimaryDzModal.args = {};
