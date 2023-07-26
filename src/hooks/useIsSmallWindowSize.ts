import useWindowSize from "./useWindowSize";
import { useMemo } from "react";
import { BREAKPOINTS } from "../layout/breakpoints";

export const useIsSmallWindowSize = () => {
  const { width } = useWindowSize();

  return useMemo(() => {
    return width <= BREAKPOINTS.MD;
  }, [width]);
}
