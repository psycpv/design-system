export const hasStringValue = (value: string) => {
  return !!value;
};

export const isEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const isPhoneNumber = (phone: string) => {
  return String(phone)
    .toLowerCase()
    .match(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    );
};

export const sliceMaxCharLength = (
  text: string | undefined | null,
  maxNumber: number
) => (text && text.length ? text.slice(0, maxNumber) : '');
