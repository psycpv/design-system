import React, { FC, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'PDF'];

export interface DzFileUploaderProps {
  isDragging: boolean;
  text: string;
}

export const DzFileUploader: FC<DzFileUploaderProps> = () => {
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
};

export default DzFileUploader;
