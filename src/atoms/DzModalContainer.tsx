import React, { ReactNode, useEffect, useState } from 'react';
import { Close } from '../svgIcons';

interface DzModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const styles: any = {
  container: `
    bg-neutral-100
    fixed
    z-[999]
    w-screen
    h-screen
    top-0
    left-0
    px-[1.25rem]
    flex
    items-center
    justify-center
  `,
  closeIcon: `
    absolute
    right-[1.25rem]
    top-[1.25rem]
    cursor-pointer
  `,
  contentContainer: `
    relative
  `,
};

export const DzModalContainer = ({
  children,
  isOpen,
  onClose,
}: DzModalContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const onClickClose = () => {
    setIsModalOpen(false);
    onClose?.();
  };

  return isModalOpen ? (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Close onClick={onClickClose} className={styles.closeIcon} />
        {children}
      </div>
    </div>
  ) : null;
};

export default DzModalContainer;
