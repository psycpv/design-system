import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';
export const Close: FC<IconProps> = ({
  width = 12,
  height = 11,
  fill = 'black',
  viewBox = '0 0 12 11',
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
      d="M6.87957 5.44L11.4396 10L10.5596 10.88L5.99957 6.32L1.43957 10.88L0.55957 10L5.11957 5.44L0.55957 0.88L1.43957 0L5.99957 4.56L10.5596 0L11.4396 0.88L6.87957 5.44Z"
      {...rest}
      ariaTitle="Close Icon"
    />
  );
};

export default Close;
