import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import PlusIcon from '../../svgIcons/plus';
import MinusIcon from '../../svgIcons/minus';
import { Close } from '../../svgIcons';

const styles: any = {
  imageZoomModalContainer: `     
    fixed 
    h-screen 
    left-0    
    top-0 
    w-screen 
    z-[300]
    bg-white-100
  `,
  modalHeaderContainer: `
    h-[3.75rem] 
    w-full 
    flex 
    justify-between
    align-center
    text-sm
    items-center
    px-[1.25rem]
  `,
  modalCloseButton: `
    flex-none
  `,
  plusButton: `
    mr-[2.5rem]
  `,
  icon: `
    mr-[0.6rem]
  `,
  closeIcon: `
    inline
    ml-[0.6rem]
  `,
};

interface DzImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export const DzImageZoomModal = ({
  isOpen,
  onClose,
  imgUrl,
}: DzImageZoomModalProps) => {
  const onClickClose = () => onClose();

  return isOpen ? (
    <div className={styles.imageZoomModalContainer}>
      <TransformWrapper initialScale={1}>
        {({ zoomIn, zoomOut }) => (
          <>
            <div className={styles.modalHeaderContainer}>
              <div>
                <button onClick={() => zoomIn()} className={styles.plusButton}>
                  <PlusIcon className={styles.icon} />
                  Zoom In
                </button>
                <button onClick={() => zoomOut()}>
                  <MinusIcon className={styles.icon} />
                  Zoom Out
                </button>
              </div>
              <button
                className={styles.modalCloseButton}
                onClick={() => onClickClose()}
              >
                Close <Close className={styles.closeIcon} />
              </button>
            </div>
            <TransformComponent>
              <img src={imgUrl} alt="TODO" />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  ) : null;
};
