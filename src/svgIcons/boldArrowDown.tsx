import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const BoldArrowDown: FC<IconProps> = ({
  width = 10,
  height = 6,
  fill = 'black',
  viewBox = '0 0 10 6',
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
      d="M-0.000499027 0.14589L4.99975 5.85376L10 0.14589L-0.000499027 0.14589Z"
      {...rest}
      ariaTitle="Bold Arrow Down"
    />
  );
};

export default BoldArrowDown;
