import React, { FC, useRef, ReactNode, MouseEventHandler } from 'react';
import { Dialog } from '@headlessui/react';
import CloseIcon from '../svgIcons/close';
import { cn } from '../utils/classnames';
import { DzButton, DzButtonProps, BUTTON_SIZES, BUTTON_VARIANTS } from './DzButton';
import { DzTitle, TITLE_TYPES, TITLE_SIZES } from './DzTitle';

export interface DzModalProps {
  children: ReactNode | string;
  isOpen: boolean;
  maxWidth?: string;
  maxHeightContent?: string;
  title?: string;
  buttonText?: string;
  primaryBtnProps?: DzButtonProps;
  onClickPrimary?: MouseEventHandler<HTMLButtonElement>;
  onClickClose?: (value: boolean) => void;
}

const styles = {
  modal: `
    relative
    shadow-lg
    bg-white-100
  `,
  headerSection: `
    absolute
    bg-white-100
    min-h-[1.625rem]
    p-5
    h-fit
    z-20
    sticky
    top-0
    group-hover:shadow-down
  `,
  bottomSection: `
    flex
    justify-end
    p-5
    bg-white-100
    z-20
    group-hover:shadow-top
  `,
  panel: `
    flex
    flex-col
  `,
  childContainer: `
    bg-white-100
    px-5
    max-h-[12rem]
  `,
  closeIcon: `
    ml-5
    my-auto
    cursor-pointer
  `,
  titleHeader: `
    flex
    justify-between
    content-center
  `,
};
export const DzModal: FC<DzModalProps> = ({
  children,
  buttonText = '',
  title = '',
  isOpen = true,
  maxWidth = '441px',
  maxHeightContent = '300px',
  primaryBtnProps = {},
  onClickClose = () => null,
  onClickPrimary = () => null,
}) => {
  const focusRef = useRef(null);
  const renderHeaderTitle = title ? (
    <Dialog.Title className={cn(styles.titleHeader)}>
      <DzTitle
        titleType={TITLE_TYPES.H3}
        title={title}
        titleSize={TITLE_SIZES.LG}
      />
      <div>
        <CloseIcon
          className={cn(styles.closeIcon)}
          onClick={() => onClickClose(false)}
        />
      </div>
    </Dialog.Title>
  ) : null;
  return (
    <Dialog
      style={{ maxWidth}}
      className={cn(styles.modal, 'group')}
      open={isOpen}
      onClose={onClickClose}
      initialFocus={focusRef}
    >
      <Dialog.Panel className={cn(styles.panel)}>
        <div ref={focusRef} className={cn(styles.headerSection)}>
          {renderHeaderTitle}
        </div>
        <div
          style={{ maxHeight: maxHeightContent }}
          className={cn(styles.childContainer)}
        >
          {children}
        </div>
        <div className={cn(styles.bottomSection)}>
          <DzButton
            size={BUTTON_SIZES.LARGE}
            onClick={onClickPrimary}
            variant={BUTTON_VARIANTS.PRIMARY}
            className="text-sm"
            {...primaryBtnProps}
          >
            {buttonText}
          </DzButton>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DzModal;
