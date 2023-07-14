export const scrollToElementId = (id: string, offset: number = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const slugify = (str: string): string =>
  str
    ?.trim()
    ?.replace(/[^\w]+/g, ' ')
    ?.replace(/\s+/g, '-')
    ?.toLowerCase();
