import { cn } from '../utils/classnames';
import CheckmarkIcon from '../svgIcons/checkmark';
import { DzInput } from './DzInput';
import React, { useState, useEffect } from 'react';

export interface CheckProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  subtitle?: string;
  disabled?: boolean;
  hasError?: boolean;
  hover?: boolean;
  focus?: boolean;
  selected?: boolean;
  ariaDescribedBy?: string;
}

const styles = {
  hideCheck: `
    hidden
  `,
  checkbox: `
    appearance-none
    cursor-pointer
    h-5
    w-5
    border
    bg-transparent
    rounded-none
    transition
    duration-150
    outline-0
    border-black-60
    focus:border-black-100
    active:border-black-100
    hover:border-black-100
    disabled:border-black-40
    invalid:border-red-100
    checked:bg-black-100
    checked:text-white-100
    checked:disabled:bg-black-40
    disabled:pointer-events-none
  `,
  checked: `
    text-black-100
  `,
  unchecked: `
    text-black-60
  `,
  disabled: `
    !text-black-40
    !hover:text-black-40
    !pointer-events-none
  `,
  labelContainer: `
    relative
    flex
    gap-[0.625rem]
    bg-white-100
  `,
  textContainer: `
    flex
    flex-col
    gap-[0.375rem]
  `,
  title: `
    text-sm
    hover:text-black-100
    focus:text-black-100
    hover:underline
    focus:underline
  `,
  subtitle: `
    text-xs
  `,
  checkmark: `
    absolute
    top-[0.3125rem]
    left-[0.1875rem]
  `,
  error: `
    text-red-100
    border-red-100
  `,
};

export const DzCheckbox: React.FC<CheckProps> = ({
  id,
  disabled,
  selected,
  title,
  subtitle,
  hasError = false,
  ariaDescribedBy = '',
  onChange,
  ...rest
}) => {
  const [hasBeenChecked, setHasBeenChecked] = useState<boolean>(
    rest?.checked ?? false
  );
  const [isValidValue, setIsValidValue] = useState<boolean>(!hasError);
  const checkedStyle = hasBeenChecked ? styles.checked : styles.unchecked;
  const weightStyle = (isSubtitle = false) =>
    isSubtitle ? styles.unchecked : checkedStyle;
  const disabledStyle = disabled ? styles.disabled : '';
  const errorClass = !isValidValue ? styles.error : '';

  useEffect(() => {
    setIsValidValue(!hasError);
  }, [hasError]);

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target) setHasBeenChecked(event?.target?.checked);
    if (!disabled && onChange) {
      onChange(event);
    }
  };
  return (
    <label className={cn(styles.labelContainer, 'group')}>
      <DzInput
        className={cn(styles.checkbox, 'peer', errorClass)}
        type="checkbox"
        disabled={disabled}
        onChange={handleSelect}
        aria-describedby={ariaDescribedBy ?? `${title}-description`}
        {...rest}
      />
      <CheckmarkIcon
        fill="white"
        className={cn(styles.checkmark, 'hidden', 'peer-checked:block')}
      />
      <div className={cn(styles.textContainer)}>
        <span
          id={`${id ?? ''}-${title}-description`}
          className={cn(styles.title, weightStyle(), disabledStyle, errorClass)}
        >
          {title}
        </span>
        {subtitle ? (
          <span
            className={cn(
              styles.subtitle,
              weightStyle(true),
              disabledStyle,
              errorClass
            )}
          >
            {subtitle}
          </span>
        ) : null}
      </div>
    </label>
  );
};

export default DzCheckbox;
