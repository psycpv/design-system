import { PortableTextProps } from '@portabletext/react';

export interface DzPortableTextProps {
  portableProps: PortableTextProps;
  customStyles?: CustomStyles;
  builder: any;
  ImgElement: any;
  charLimit?: number;
}

interface CustomStyles {
  [key: string]: string;
}
