import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const ArrowDown: FC<IconProps> = ({
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
      d="M4.2385 5.08825L0.1755 1.02325C-0.0585 0.79025 -0.0585 0.40925 0.1755 0.17625C0.4095 -0.05875 0.7885 -0.05875 1.0235 0.17625L4.9885 4.14025L8.9525 0.17625C9.1875 -0.05875 9.5675 -0.05875 9.8015 0.17625C10.0355 0.40925 10.0355 0.78925 9.8015 1.02325L5.7355 5.09025C5.5355 5.29025 5.2715 5.40025 4.9885 5.40025C4.7085 5.40025 4.4355 5.28725 4.2385 5.08825Z"
      {...rest}
      ariaTitle="Arrow Down Icon"
    />
  );
};

export default ArrowDown;
