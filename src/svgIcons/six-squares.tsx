import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const SixSquares: FC<IconProps> = ({
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
      ariaTitle="Six Squares Icon"
    >
      <rect width="2" height="2" fill={fill} />
      <rect x="4" width="2" height="2" fill={fill} />
      <rect x="8" width="2" height="2" fill={fill} />
      <rect y="4" width="2" height="2" fill={fill} />
      <rect x="4" y="4" width="2" height="2" fill={fill} />
      <rect x="8" y="4" width="2" height="2" fill={fill} />
      <rect y="8" width="2" height="2" fill={fill} />
      <rect x="4" y="8" width="2" height="2" fill={fill} />
      <rect x="8" y="8" width="2" height="2" fill={fill} />
    </DzSvg>
  );
};

export default SixSquares;
