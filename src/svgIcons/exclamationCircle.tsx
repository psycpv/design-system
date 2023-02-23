import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';
export const ExclamationCircle: FC<IconProps> = ({
  width = 16,
  height = 16,
  fill = 'black',
  viewBox = '0 0 16 16',
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
      d="M0 8C0 3.58172 3.58172 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM15.1111 8C15.1111 4.07264 11.9274 0.888889 8 0.888889C4.07264 0.888889 0.888889 4.07264 0.888889 8C0.888889 11.9274 4.07264 15.1111 8 15.1111C11.9274 15.1111 15.1111 11.9274 15.1111 8ZM8.57778 4.13333L8.39111 9.77778H7.60889L7.42222 4.13333H8.57778ZM8.56889 10.6578H7.42222L7.44 11.8667H8.56889V10.6578Z"
      {...rest}
      ariaTitle="ExclamationCircle Icon"
    />
  );
};

export default ExclamationCircle;
