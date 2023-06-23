import { cn } from '../utils/classnames';

export const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item);

export const isString = str => typeof str === 'string';

export const mergeStyles = (target, source) => {
  if (isString(target) || isString(source)) return cn(target, source);

  if (isObject(target) || isObject(source)) {
    const obj = {};

    const allKeys = Object.keys(Object.assign({}, target || {}, source || {}));

    for (const key of allKeys) {
      obj[key] = mergeStyles(target?.[key], source?.[key]);
    }

    return obj;
  }

  return target || source;
};
