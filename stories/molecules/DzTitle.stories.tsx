import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzTitleMolecule,
  DzTitleMoleculeProps,
} from '../../src/molecules/DzTitleMolecule/DzTitleMolecule';
import { data } from '../../constants/mocks/DzTitle';

const meta: Meta = {
  title: 'Molecules/Content/DzTitleMolecule',
  component: DzTitleMolecule,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dzFigmaWhite',
    },
  },
};

export default meta;

const Template: Story<DzTitleMoleculeProps> = args => (
  <DzTitleMolecule {...args} />
);

export const TitleWithDescription = Template.bind({});
TitleWithDescription.args = { ...data, linkCTA: {} };

export const TitleWithCTA = Template.bind({});
TitleWithCTA.args = { ...data, category: '', description: '' };
