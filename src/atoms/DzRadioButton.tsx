import { cn } from '../utils/classnames';
import { DzInput } from './DzInput';
import React, { useState, useEffect, PropsWithRef } from 'react';

export interface RadioProps
  extends PropsWithRef<React.InputHTMLAttributes<HTMLInputElement>> {
  title: string;
  subtitle?: string;
  disabled?: boolean;
  hasError?: boolean;
  checked?: boolean;
  hover?: boolean;
  focus?: boolean;
  ariaDescribedBy?: string;
}

const styles = {
  hideCheck: `
    hidden
  `,
  radio: `
    appearance-none
    cursor-pointer
    h-6
    w-6
    border
    bg-transparent
    rounded-full
    transition
    duration-150
    outline-0
    border-black-60
    focus:border-black-100
    active:border-black-100
    hover:border-black-100
    disabled:border-black-40
    invalid:border-red-100
    checked:border-black-100
    checked:border-4
    checked:text-white-100
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
  error: `
    !text-red-100
    !border-red-100
  `,
};

export const DzRadioButton = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      disabled,
      title,
      subtitle,
      hasError = false,
      onChange,
      ariaDescribedBy = '',
      checked = false,
      ...rest
    },
    ref
  ) => {
    const [hasBeenChecked, setHasBeenChecked] = useState<boolean>(false);
    const [isValidValue, setIsValidValue] = useState<boolean>(!hasError);

    const checkedStyle = hasBeenChecked ? styles.checked : styles.unchecked;
    const weightStyle = (isSubtitle = false) =>
      isSubtitle ? styles.unchecked : checkedStyle;
    const disabledStyle = disabled ? styles.disabled : '';
    const errorClass = !isValidValue ? styles.error : '';

    useEffect(() => {
      setIsValidValue(!hasError);
    }, [hasError]);

    useEffect(() => {
      setHasBeenChecked(checked);
    }, [checked]);

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event?.target) setHasBeenChecked(event?.target?.checked);
      if (!disabled && onChange) {
        onChange(event);
      }
    };

    return (
      <label className={cn(styles.labelContainer, 'group')}>
        <DzInput
          ref={ref}
          className={cn(styles.radio, 'peer', errorClass)}
          type="radio"
          disabled={disabled}
          onChange={handleSelect}
          aria-describedby={ariaDescribedBy ?? `${title}-description`}
          {...rest}
        />
        <div className={cn(styles.textContainer)}>
          <span
            id={`${id ?? ''}-${title}-description`}
            className={cn(
              styles.title,
              weightStyle(),
              disabledStyle,
              errorClass
            )}
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
  }
);

export default DzRadioButton;
