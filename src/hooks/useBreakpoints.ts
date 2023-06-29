import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../layout/breakpoints';

const QUERY = `(min-width: ${BREAKPOINTS.MD}px)`;

export type BreakpointsIndicator = { isSmall: boolean };

const useBreakpoints = (): BreakpointsIndicator => {
  const isSmallWindow = (): boolean =>
    typeof window !== 'undefined' ? !window.matchMedia(QUERY).matches : true;

  const [breakpoints, setBreakpoints] = useState<BreakpointsIndicator>({
    isSmall: isSmallWindow(),
  });

  useEffect(() => {
    setBreakpoints({ isSmall: isSmallWindow() });

    const matchQueryList = window.matchMedia(QUERY);
    const handleChange = (e: any) => setBreakpoints({ isSmall: !e.matches });
    matchQueryList.addEventListener('change', handleChange);

    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return breakpoints;
};

export default useBreakpoints;
