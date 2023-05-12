import React, { FC } from 'react';
import { DzSvg } from './DzSvg';
import { IconProps } from './types';

export const Search: FC<IconProps> = ({
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
      d="M12.4434 7.22152C12.4434 10.1049 10.106 12.4423 7.22261 12.4423C4.33926 12.4423 2.00183 10.1049 2.00183 7.22152C2.00183 4.33816 4.33926 2.00073 7.22261 2.00073C10.106 2.00073 12.4434 4.33816 12.4434 7.22152ZM11.5724 12.9857C10.3626 13.9 8.85593 14.4423 7.22261 14.4423C3.23469 14.4423 0.00183105 11.2094 0.00183105 7.22152C0.00183105 3.23359 3.23469 0.000732422 7.22261 0.000732422C11.2105 0.000732422 14.4434 3.23359 14.4434 7.22152C14.4434 8.85493 13.901 10.3617 12.9866 11.5715L16 14.5848L14.5858 15.9991L11.5724 12.9857Z"
      {...rest}
      ariaTitle="Search Icon"
    />
  );
};

export default Search;
