import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const DropIcon: FC<IconProps> = ({
  width = 41,
  height = 41,
  fill = 'black',
  viewBox = '0 0 41 41',
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      ariaTitle="Drop Icon"
    >
      <circle cx="20.5" cy="20.5" r="20" stroke={fill} />
      <path
        d="M28 21.4004V26.3004C28 26.6854 27.685 27.0004 27.3 27.0004H14.7C14.315 27.0004 14 26.6854 14 26.3004V21.4004"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9999 23.5V13"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 16.5L21 13L24.5 16.5"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </DzSvg>
  );
};

export default DropIcon;
