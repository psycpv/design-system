import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const EightSquares: FC<IconProps> = ({
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
      ariaTitle="Eight Squares Icon"
    >
      <rect width="1" height="1" fill={fill} />
      <rect x="3" width="1" height="1" fill={fill} />
      <rect x="6" width="1" height="1" fill={fill} />
      <rect x="9" width="1" height="1" fill={fill} />
      <rect y="4.5" width="1" height="1" fill={fill} />
      <rect x="3" y="4.5" width="1" height="1" fill={fill} />
      <rect x="6" y="4.5" width="1" height="1" fill={fill} />
      <rect x="9" y="4.5" width="1" height="1" fill={fill} />
      <rect y="9" width="1" height="1" fill={fill} />
      <rect x="3" y="9" width="1" height="1" fill={fill} />
      <rect x="6" y="9" width="1" height="1" fill={fill} />
      <rect x="9" y="9" width="1" height="1" fill={fill} />
    </DzSvg>
  );
};

export default EightSquares;
