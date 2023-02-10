import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const Checkmark: FC<IconProps> = ({
  width = 14,
  height = 10,
  fill = 'black',
  viewBox = '0 0 14 10',
  className = '',
  ...rest
}) => {
  return (
    <DzSvg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill={fill}
      d="M4.93608 8.20599L12.5761 0.575989L13.4241 1.42499L4.93208 9.90499L0.684082 5.62299L1.53608 4.77699L4.93608 8.20599Z"
      {...rest}
      ariaTitle="Checkmark Icon"
    />
  );
};

export default Checkmark;
