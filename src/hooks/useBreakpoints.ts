import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../layout/breakpoints';

const QUERY = `(min-width: ${BREAKPOINTS.MD}px)`;

const useBreakpoints = (): { isSmall: boolean } => {
  const isSmallWindow = (): boolean =>
    typeof window !== 'undefined' ? !window.matchMedia(QUERY).matches : false;

  const [isSmall, setIsSmall] = useState<boolean>(isSmallWindow());

  useEffect(() => {
    setIsSmall(isSmallWindow());

    const matchQueryList = window.matchMedia(QUERY);
    const handleChange = (e: any) => setIsSmall(!e.matches);
    matchQueryList.addEventListener('change', handleChange);

    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return { isSmall };
};

export default useBreakpoints;
