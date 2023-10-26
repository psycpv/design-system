import React, { ReactNode } from 'react';

import DzTitleMolecule, {
  DzMoleculeLinkCTA,
  DzMoleculeTitleCTA,
  DzTitleMoleculeTypes,
} from './DzTitleMolecule';
import { TITLE_SIZES, TITLE_TYPES, TitleType } from '../../atoms';
import { ColumnProps } from '../../layout';

type ContainerTitleProps = {
  type?: DzTitleMoleculeTypes;
  titleType?: TitleType;
  title: string;
  category?: string;
  description?: ReactNode;
  titleSize?: string;
  linkCTA?: DzMoleculeLinkCTA;
  primaryCTA?: DzMoleculeTitleCTA;
  fullLeftContainer?: boolean;
  customCTAContainerProps?: ColumnProps;
  disableMaxTitleLength?: boolean;
};

const styles: any = {
  pageTitleContainer: `
    my-[3.75rem]
  `,
  moleculeTitleContainer: `
    mb-5 md:mb-10
  `,
};

const stylesPerType: any = {
  [DzTitleMoleculeTypes.PAGE]: styles.pageTitleContainer,
  [DzTitleMoleculeTypes.MOLECULE]: styles.moleculeTitleContainer,
};

export const DzContainerTitle = ({
  type = DzTitleMoleculeTypes.PAGE,
  title,
  titleType = TITLE_TYPES.H1,
  titleSize = TITLE_SIZES.MD,
  fullLeftContainer = false,
  description,
  category,
  linkCTA,
  primaryCTA,
  customCTAContainerProps,
  disableMaxTitleLength,
}: ContainerTitleProps) => {
  return (
    <DzTitleMolecule
      type={type}
      data={{
        title,
        customClass: stylesPerType[type],
        titleProps: {
          titleType: titleType,
          titleSize,
        },
        category,
        description,
        linkCTA,
        primaryCTA,
        fullLeftContainer,
        customCTAContainerProps,
        disableMaxTitleLength,
      }}
    />
  );
};

export default DzContainerTitle;
