import { useEffect } from 'react';

export const useKeyDownCallback = (keyCode: string, callback: () => void) => {
  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === keyCode) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyCode, callback]);
};
