import React, { FC } from "react";
import DzTitleMolecule, { DzTitleExhibitionProps, DzTitleMoleculeTypes } from "./DzTitleMolecule";
import { TITLE_TYPES } from "../../atoms";


const DzTitleExhibition: FC<DzTitleExhibitionProps> = () => {
  return (
    <DzTitleMolecule
      type={DzTitleMoleculeTypes.PAGE}
      data={{
        title: "Sherrie Levine: Wood",
        category: "Exhibition",
        description: "  ", // TODO make description optional; current it is required to show CTA
        titleProps: {
          titleType: TITLE_TYPES.H1,
        },
        primaryCTA: {
          title: 'Inquire',
          supertitle: 'Interested in this exhibition?',
          ctaProps: {
            onClick: () => null,
          },
        },
      }}
    />
  )
}

export default DzTitleExhibition;
