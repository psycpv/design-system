import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DzTitleMolecule,
  DzTitleMoleculeProps,
  DzTitleMoleculeTypes,
} from '../../src/molecules/DzTitleMolecule/DzTitleMolecule';
import { exhibitionData, pageData, sectionData } from '../../constants/mocks/DzTitle';

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

export const ExhibitionTitleVariant = Template.bind({});
ExhibitionTitleVariant.args = {
  type: DzTitleMoleculeTypes.EXHIBITION,
  data: exhibitionData
}
