import cn from 'classnames';
import { DzInput } from './DzInput';
import React, { useState } from 'react';

export interface RadioProps
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
  radio:`
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
  checked:`
    text-black-100
  `,
  unchecked:`
    text-black-60
  `,
  disabled:`
    text-black-40
    hover:text-black-40
    pointer-events-none
  `,
  labelContainer:`
    relative
    flex
    gap-[0.625rem]
  `,
  textContainer:`
    flex
    flex-col
    gap-[0.375rem]
    max-w-[11.875rem]
  `,
  title:`
    text-sm
    hover:text-black-100
    focus:text-black-100
    hover:underline
    focus:underline
  `,
  subtitle:`
    text-xs
  `
}

export const DzRadioButton: React.FC<RadioProps> = ({
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
        className={cn(styles.radio, 'peer')}
        type="radio"
        disabled={disabled}
        onChange={handleSelect}
        {...rest}
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

export default DzRadioButton;
