import React, { FC } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { DropIcon } from '../svgIcons';
import { cn } from '../utils/classnames';

const DEFAULT_TYPES = ['JPG', 'PNG', 'PDF'];

export interface DzFileUploaderProps {
  formName: string;
  required?: boolean;
  disabled?: boolean;
  hoverTitle?: string;
  multipleFiles: boolean;
  handleChange: Function;
  onTypeError?: Function;
  className?: string;
  title?: string;
}

const styles: any = {
  infoContainer: `
    flex
    gap-5
    items-center
  `,
  dropArea: `
    flex
    items-center
    justify-center
    bg-white-100
    border
    border-dashed
    border-black-40
    h-[6.25rem]
    w-full
  `,
};

export const DzFileUploader: FC<DzFileUploaderProps> = ({
  handleChange,
  onTypeError = () => null,
  required = false,
  disabled = false,
  multipleFiles = true,
  hoverTitle = null,
  formName = 'file',
  title = 'Drag & Drop or Click to Browse',
  className = '',
}) => {
  return (
    <FileUploader
      handleChange={handleChange}
      name={formName}
      types={DEFAULT_TYPES}
      multipleFiles={multipleFiles}
      required={required}
      disabled={disabled}
      hoverTitle={hoverTitle}
      onTypeError={onTypeError}
    >
      <div className={cn(styles.dropArea, className)}>
        <div className={cn(styles.infoContainer)}>
          <DropIcon /> {title}
        </div>
      </div>
    </FileUploader>
  );
};

export default DzFileUploader;
