import cn from 'classnames'
import DzInput from './DzInput'
import DzTitle from './DzTitle'
import React, { useState, useEffect, FC, ChangeEvent } from 'react'
import useDebounce from '@/hooks/useDebounce'

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  subtitle?: string
  disabled?: boolean
  error?: boolean
  hover?: boolean
  focus?: boolean
  selected?: boolean
}

const styles = {
  inputContainer: `
    flex
    flex-col
    justify-start
    gap-[0.9375rem]
  `,
  input:`
    text-black-60
    appearance-none
    outline-0
    pb-2
    border-b
    bg-transparent
    border-black-60
    placeholder:text-black-40
    hover:text-black-100
    hover:border-black-100
    focus:border-black-100
    focus:text-black-100
    active:text-black-100
  `,
  content:`
    text-black-100
    border-black-100
  `,
  disabled:`
    pointer-events-none
    text-black-40
    border-black-40
  `
}

export const DzInputText: FC<InputTextProps> = ({
  disabled,
  selected,
  placeholder,
  title,
  subtitle,
  onChange,
  ...rest
}) => {
  console.log('DzInputText disabled', disabled)
  const [value, setValue] = useState<string>('')
  const [classContent, setClassContent] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 100)

  const disabledClass = disabled ? styles.disabled : ''

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) setValue(event.target.value)
    if (!disabled && onChange) {
      onChange(event)
    }
  }

  const titleSection = title ? (
    <DzTitle
      titleSize="extraSmall"
      subtitleSize="extraSmall"
      titleType="h6"
      title={title}
      subtitle={subtitle}
      subtitleType="p"
      disabled={disabled}
    />
  ) : null

  useEffect(() => {
    if (value) {
      setClassContent(styles.content)
    } else {
      setClassContent('')
    }
  }, [debouncedValue])

  return (
    <div className={styles.inputContainer}>
      {titleSection}
      <DzInput
        className={cn(styles.input, classContent, disabledClass)}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
      />
    </div>
  )
}

export default DzInputText
