import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const ChevronRight: FC<IconProps> = ({
  width = 6,
  height = 10,
  fill = 'black',
  viewBox = '0 0 6 10',
  className = '',
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill={fill}
      ariaTitle="Chevron Right Icon"
      d="M5.08874 4.23853L1.02374 0.175531C0.790738 -0.0584695 0.409738 -0.0584695 0.176738 0.175531C-0.0582617 0.409531 -0.0582617 0.78853 0.176738 1.02353L4.14074 4.98853L0.176738 8.95253C-0.0582617 9.18753 -0.0582617 9.56753 0.176738 9.80153C0.409738 10.0355 0.789738 10.0355 1.02374 9.80153L5.09074 5.73553C5.29074 5.53553 5.40074 5.27153 5.40074 4.98853C5.40074 4.70853 5.28774 4.43553 5.08874 4.23853Z"
    />
  );
};

export default ChevronRight;
