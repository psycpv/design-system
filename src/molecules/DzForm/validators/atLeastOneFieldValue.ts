export const atLeastOneFieldValue = (
  formValues: Record<string, any>,
  fieldNames: Array<string>,
  value: any
) => {
  let result = false;

  fieldNames.forEach(fieldName => {
    if (formValues[fieldName] === value) {
      result = true;
    }
  });
  return result;
};
