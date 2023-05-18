import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const FourSquares: FC<IconProps> = ({
  width = 10,
  height = 10,
  fill = 'black',
  viewBox = '0 0 10 10',
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      ariaTitle="Four squares Icon"
    >
      <rect width="4" height="4" fill={fill} />
      <rect x="6" width="4" height="4" fill={fill} />
      <rect y="6" width="4" height="4" fill={fill} />
      <rect x="6" y="6" width="4" height="4" fill={fill} />
    </DzSvg>
  );
};

export default FourSquares;
