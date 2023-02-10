import cn from 'classnames';
import CheckmarkIcon from '@/svgIcons/checkmark';
import { DzInput } from './DzInput';
import React, { useState } from 'react';

export interface CheckProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  subtitle?: string;
  disabled?: boolean;
  error?: boolean;
  hover?: boolean;
  focus?: boolean;
  selected?: boolean;
}

const styles = {
  hideCheck: `
    hidden
  `,
  checkbox: `
    appearance-none
    cursor-pointer
    h-6
    w-6
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
    disabled:pointer-events-none
  `,
  checked: `
    text-black-100
  `,
  unchecked: `
    text-black-60
  `,
  disabled: `
    text-black-40
    hover:text-black-40
    pointer-events-none
  `,
  labelContainer: `
    relative
    flex
    gap-[0.625rem]
  `,
  textContainer: `
    flex
    flex-col
    gap-[0.375rem]
    max-w-[11.875rem]
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
    top-[0.375rem]
    left-[0.3125rem]
  `,
};

export const DzCheckbox: React.FC<CheckProps> = ({
  disabled,
  selected,
  title,
  subtitle,
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const checkedStyle = checked ? styles.checked : styles.unchecked;
  const weightStyle = (isSubtitle = false) =>
    isSubtitle ? styles.unchecked : checkedStyle;
  const disabledStyle = disabled ? styles.disabled : '';

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target) setChecked(event?.target?.checked);
    if (!disabled && onChange) {
      onChange(event);
    }
  };
  return (
    <label className={cn(styles.labelContainer, 'group')}>
      <DzInput
        className={cn(styles.checkbox, 'peer')}
        type="checkbox"
        disabled={disabled}
        onChange={handleSelect}
        {...rest}
      />
      <CheckmarkIcon
        fill="white"
        className={cn(styles.checkmark, 'hidden', 'peer-checked:block')}
      />
      <div className={styles.textContainer}>
        <span className={cn(styles.title, weightStyle(), disabledStyle)}>
          {title}
        </span>
        {subtitle ? (
          <span
            className={cn(styles.subtitle, weightStyle(true), disabledStyle)}
          >
            {subtitle}
          </span>
        ) : null}
      </div>
    </label>
  );
};

export default DzCheckbox;
