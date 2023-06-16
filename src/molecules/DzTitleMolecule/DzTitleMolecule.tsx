import React, { FC } from 'react';
import { DzTitlePage, DzTitlePageProps } from './DzTitlePage';
import { DzTitleSection, DzTitleSectionProps } from './DzTitleSection';
import { DzTitleMol } from './DzTitleMol';

export enum DzTitleMoleculeTypes {
  PAGE = 'page',
  SECTION = 'section',
  MOLECULE = 'molecule',
  EXHIBITION = 'exhibition',
  EXCEPTIONAL = 'exceptional',
}

export interface DzTitleMoleculeProps {
  data: DzTitlePageProps | DzTitleSectionProps;
  type: DzTitleMoleculeTypes;
}

export const DzTitleMolecule: FC<DzTitleMoleculeProps> = ({
  type = DzTitleMoleculeTypes.PAGE,
  data,
}) => {
  if (type === DzTitleMoleculeTypes.PAGE) {
    return <DzTitlePage {...(data as DzTitlePageProps)} />;
  }

  if (type === DzTitleMoleculeTypes.SECTION) {
    return <DzTitleSection {...(data as DzTitleSectionProps)} />;
  }

  if (type === DzTitleMoleculeTypes.MOLECULE) {
    return <DzTitleMol {...(data as DzTitleSectionProps)} />;
  }

  return <div>Not supported type</div>;
};

export default DzTitleMolecule;
