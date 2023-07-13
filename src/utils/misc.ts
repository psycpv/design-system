export const scrollToElementId = (
  id: string,
  scrollProps: ScrollIntoViewOptions = { behavior: 'smooth' }
) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView(scrollProps);
  }
};
