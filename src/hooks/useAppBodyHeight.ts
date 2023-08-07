import { useMemo } from 'react';
import useWindowSize from './useWindowSize';

// Calculates the height of the app container minus the app header height
// window.innerHeight must be used to avoid iOS viewport measurement issues
export const useAppBodyHeight = () => {
  const { width, height } = useWindowSize();

  return useMemo(() => {
    if (typeof window != 'undefined' && window.document) {
      return window.innerHeight - 60;
    }
    return null;
    //eslint-disable-next-line
  }, [width, height])
};
