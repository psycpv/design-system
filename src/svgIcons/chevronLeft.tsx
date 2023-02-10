import React, { FC } from 'react';

import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const ChevronLeft: FC<IconProps> = ({
  width = 6,
  height = 11,
  fill = 'black',
  viewBox = '0 0 6 11',
  className = '',
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill={fill}
      ariaTitle="Chevron Left Icon"
      d="M0.600226 6.45013L4.66523 10.5131C4.89823 10.7471 5.27923 10.7471 5.51223 10.5131C5.74723 10.2791 5.74723 9.90013 5.51223 9.66513L1.54823 5.70013L5.51223 1.73613C5.74723 1.50113 5.74723 1.12113 5.51223 0.887129C5.27923 0.653129 4.89923 0.653129 4.66523 0.887129L0.598227 4.95313C0.398227 5.15313 0.288227 5.41713 0.288227 5.70013C0.288227 5.98013 0.401227 6.25313 0.600226 6.45013Z"
    />
  );
};

export default ChevronLeft;
