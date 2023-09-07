import React, { ReactNode, useEffect, useState } from 'react';
import { Close } from '../svgIcons';

interface DzModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const styles: any = {
  container: `
    bg-white-100
    absolute
    m-auto
    left-0
    right-0
    z-[999]
  `,
  closeIcon: `
    absolute
    right-0
    top-0
    cursor-pointer
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
      <Close onClick={onClickClose} className={styles.closeIcon} />
      {children}
    </div>
  ) : null;
};

export default DzModalContainer;
