import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzTitleMolecule,
  DzTitleMoleculeProps,
  DzTitleMoleculeTypes,
} from '../../src/molecules/DzTitleMolecule/DzTitleMolecule';
import { pageData, sectionData } from '../../constants/mocks/DzTitle';

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

export const PageTitleVariant = Template.bind({});
PageTitleVariant.args = {
  type: DzTitleMoleculeTypes.PAGE,
  data: pageData,
};

export const PageTitle8ColsVariant = Template.bind({});
PageTitle8ColsVariant.args = {
  type: DzTitleMoleculeTypes.PAGE,
  data: { ...pageData, isWide: true },
};

export const SectionTitleVariant = Template.bind({});
SectionTitleVariant.args = {
  type: DzTitleMoleculeTypes.SECTION,
  data: sectionData,
};

export const MoleculeTitleVariant = Template.bind({});
MoleculeTitleVariant.args = {
  type: DzTitleMoleculeTypes.MOLECULE,
  data: sectionData,
};
