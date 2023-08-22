import { PortableTextProps } from '@portabletext/react';

export interface DzPortableTextProps {
  portableProps: PortableTextProps;
  customStyles?: CustomStyles;
  builder: any;
}

interface CustomStyles {
  [key: string]: string;
}
