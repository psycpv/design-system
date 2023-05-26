import React, { FC, useMemo, useCallback } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { DropIcon } from '../svgIcons';
import { cn } from '../utils/classnames';
import { useState } from 'react';

const DEFAULT_PROPS = {
  types: ['JPG', 'PNG', 'PDF'],
  maxSize: 10,
  hoverTitle: ' ',
};

export interface FileDragDropProps {
  name?: string;
  hoverTitle?: string;
  types?: Array<string>;
  classes?: string;
  children?: JSX.Element;
  maxSize?: number;
  minSize?: number;
  fileOrFiles?: Array<File> | File | null;
  disabled?: boolean | false;
  label?: string | undefined;
  multiple?: boolean | false;
  required?: boolean | false;
  onSizeError?: (arg0: string) => void;
  onTypeError?: (arg0: string) => void;
  onDrop?: (arg0: File | Array<File>) => void;
  onSelect?: (arg0: File | Array<File>) => void;
  handleChange?: (arg0: File | Array<File> | File) => void;
  onDraggingStateChange?: (dragging: boolean) => void;
  dropMessageStyle?: React.CSSProperties | undefined;
}

export interface DzFileUploaderProps {
  uploaderProps?: FileDragDropProps;
  className?: string;
  title?: string;
  errorMessageMaxSize?: string;
  errorMessageType?: string;
}

const styles: any = {
  infoContainer: `
    flex
    flex-col
    md:flex-row
    gap-5
    items-center
    px-5
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
    cursor-pointer
  `,
  errorMsg: `
    pt-1
    text-sm
    text-red-100
  `,
};

export const DzFileUploader: FC<DzFileUploaderProps> = ({
  uploaderProps = {},
  title = 'Drag & Drop or Click to Browse',
  className = '',
  errorMessageMaxSize,
  errorMessageType,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSizeError = useCallback(
    args => {
      const { onSizeError, maxSize } = uploaderProps;
      setErrorMessage(
        errorMessageMaxSize ??
          `File must be less than ${maxSize ?? 10}MB. Please try again.`
      );
      if (onSizeError) onSizeError(args);
    },
    [uploaderProps, errorMessageMaxSize]
  );

  const handleTypeError = useCallback(
    args => {
      const { onTypeError, types = [] } = uploaderProps;
      const typeOfFiles = types.join(',');
      setErrorMessage(
        errorMessageType ??
          `File type should be ${typeOfFiles || 'JPG, PNG, PDF'}`
      );
      if (onTypeError) onTypeError(args);
    },
    [uploaderProps, errorMessageType]
  );

  const handleDrag = useCallback(
    dragging => {
      const { onDraggingStateChange } = uploaderProps;
      if (dragging) setErrorMessage(null);
      if (onDraggingStateChange) onDraggingStateChange(dragging);
    },
    [uploaderProps]
  );

  return (
    <FileUploader
      {...DEFAULT_PROPS}
      onSizeError={handleSizeError}
      onTypeError={handleTypeError}
      onDraggingStateChange={handleDrag}
      {...uploaderProps}
    >
      <div className={cn(styles.dropArea, className)}>
        <div className={cn(styles.infoContainer)}>
          <DropIcon /> {title}
        </div>
      </div>
      <span className={cn(styles.errorMsg)}>{errorMessage}</span>
    </FileUploader>
  );
};

export default DzFileUploader;
