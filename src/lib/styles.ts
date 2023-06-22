import { cn } from '../utils/classnames';

export const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item);

export const isString = str => typeof str === 'string';

export const mergeStyles = (target, source) => {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeStyles(target[key], source[key]);
      } else if (isString(target[key]) && isString(source[key])) {
        Object.assign(target, { [key]: cn(target[key], source[key]) });
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
};
