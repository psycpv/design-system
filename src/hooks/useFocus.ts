import { RefObject, useState } from 'react';

import useEventListener from './useEventListener';

function useFocus<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
): boolean {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseFocus = () => setValue(true);
  const handleMouseBlur = () => setValue(false);

  useEventListener('focus', handleMouseFocus, elementRef);
  useEventListener('blur', handleMouseBlur, elementRef);

  return value;
}

export default useFocus;
