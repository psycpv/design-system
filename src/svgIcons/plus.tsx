import React from 'react';
import { FC } from 'react';
import { IconProps } from './types';

export const PlusIcon: FC<IconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    style={{ display: 'inline' }}
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M15 9.5H9.514V15H8.476V9.5H3V8.48h5.476V3h1.038v5.48H15V9.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default PlusIcon;
