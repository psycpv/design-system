import React from 'react'
import { FC } from 'react';
import { IconProps } from './types';

export const MinusIcon: FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={18}
    fill='none'
    style={{display: 'inline'}}
    {...props}
  >
    <path fill='#000' d='M3 8.48V9.5h12V8.48H3Z' />
  </svg>
);

export default MinusIcon;
