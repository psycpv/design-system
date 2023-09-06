import React, { ReactNode } from 'react';

interface DzModalContainerProps {
  children: ReactNode;
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
};

export const DzModalContainer = ({ children }: DzModalContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default DzModalContainer;
