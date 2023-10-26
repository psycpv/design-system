import React, { ReactNode } from 'react';
import { DzTitleProps, DzButtonProps, DzLinkProps } from '../../atoms';
import { ColumnProps } from '../../layout/DzGrid';
import { DzTitlePage } from './DzTitlePage';
import { DzTitleSection } from './DzTitleSection';
import { DzTitleMol } from './DzTitleMol';
import { ColumnSpan } from '../../layout';

export enum DzTitleMoleculeTypes {
  PAGE = 'page',
  SECTION = 'section',
  MOLECULE = 'molecule',
  EXHIBITION = 'exhibition',
  EXCEPTIONAL = 'exceptional',
}

export type DzTitlePageProps = {
  category?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  titleProps?: DzTitleProps;
  primaryCTA?: DzMoleculeTitleCTA;
  linkCTA?: Omit<DzLinkProps, 'LinkElement'>;
  customClass?: string;
  descriptionColSpan?: ColumnSpan;
  fullLeftContainer?: boolean;
  customCTAContainerProps?: ColumnProps;
  isWide?: boolean;
  disableMaxTitleLength?: boolean;
};

export interface DzMoleculeTitleCTA {
  ctaProps?: DzButtonProps;
  title: string;
  description?: string;
}

export interface DzTitleSectionProps {
  title: string;
  subtitle?: string;
  titleProps?: Partial<DzTitleProps>;
  linkCTA?: DzMoleculeLinkCTA;
  customClass?: string;
  fullLeftContainer?: boolean;
}

export type DzMoleculeLinkCTA = {
  text: string;
  url: string;
  linkElement: any;
  linkProps?: Omit<DzLinkProps, 'LinkElement'>;
};

export type DzTitleMoleculeProps = {
  data: DzTitlePageProps | DzTitleSectionProps;
  type: DzTitleMoleculeTypes;
};

export const DzTitleMolecule = ({
  type = DzTitleMoleculeTypes.PAGE,
  data,
}: DzTitleMoleculeProps) => {
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
