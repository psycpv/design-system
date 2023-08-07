import React, { FC, ReactNode } from 'react';
import { DzTitleProps, DzButtonProps, DzLinkProps } from '../../atoms';
import { DzTitlePage } from './DzTitlePage';
import { DzTitleSection } from './DzTitleSection';
import { DzTitleMol } from './DzTitleMol';
import DzTitleExhibition, { DzTitleExhibitionProps } from "./DzTitleExhibition";

export enum DzTitleMoleculeTypes {
  PAGE = 'page',
  SECTION = 'section',
  MOLECULE = 'molecule',
  EXHIBITION = 'exhibition',
  EXCEPTIONAL = 'exceptional',
}

export interface DzTitlePageProps {
  category?: string;
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  titleProps?: DzTitleProps;
  primaryCTA?: DzMoleculeTitleCTA;
  linkCTA?: DzLinkProps;
  customClass?: string;
}

export interface DzMoleculeTitleCTA {
  ctaProps?: DzButtonProps & {supertitle?: string};
  title: string;
  description?: string;
  supertitle?: string;
}

export interface DzTitleSectionProps {
  title: string;
  subtitle?: string;
  titleProps?: Partial<DzTitleProps>;
  linkCTA?: DzMoleculeLinkCTA;
  customClass?: string;
}

export interface DzMoleculeLinkCTA {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: DzLinkProps;
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

  if (type === DzTitleMoleculeTypes.EXHIBITION) {
    return <DzTitleExhibition {...(data as DzTitleExhibitionProps)} />;
  }

  return <div>Not supported type</div>;
};

export default DzTitleMolecule;
