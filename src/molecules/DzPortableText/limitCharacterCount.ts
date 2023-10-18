// Truncates the text content in a portable text object to a character limit
export const limitCharacterCount = (ptItems: any, charLimit: number) => {
  let charCount = 0;
  let isOverLimit = false;

  return ptItems.map((item: any) => {
    const children = item.children.map((child: any) => {
      const { text } = child;

      charCount = charCount + (text || '').length;

      if (charCount > charLimit) {
        if (!isOverLimit) {
          isOverLimit = true;

          return {
            ...child,
            text: (text || '').slice(0, -4).concat('...'),
          };
        }
        return {
          ...child,
          text: '',
        };
      }
      return child;
    });
    return {
      ...item,
      children,
    };
  });
};
