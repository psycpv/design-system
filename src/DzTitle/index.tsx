import cn from 'classnames'
import React, { createElement, FC, HTMLAttributes } from 'react'

// import styles from './styles.module.css'
import { TextSize } from './types'
export interface DzTitleProps {
  titleType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subtitleType?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  title: string
  subtitle?: string
  classNameTitle?: any
  classNameSubtitle?: any
  disabled?: boolean
  titleSize?: TextSize
  subtitleSize?: TextSize
}

export const DzTitle: FC<DzTitleProps> &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLHeadingElement> = ({
  titleType = 'h1',
  subtitleType = 'p',
  title,
  subtitle,
  disabled = false,
  titleSize = 'small',
  subtitleSize = 'small',
  classNameTitle,
  classNameSubtitle,
  ...rest
}) => {
  const disabledClass = disabled ? '' : ''
  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(titleType, props, title)

  const SubHeading = subtitleType
    ? ({
        ...props
      }: HTMLAttributes<HTMLHeadingElement> &
        HTMLAttributes<HTMLHeadingElement>) =>
        createElement(subtitleType, props, subtitle)
    : ()=>null

  return (
    <div>
      <Heading
        className={cn(
          'text-lg text-black-100',
          classNameTitle,
          '',
          disabledClass
        )}
        {...rest}
      />
      {subtitleType ? (
        <SubHeading
          className={cn(
            'text-sm text-black-100',
            classNameSubtitle,
            '',
            disabledClass
          )}
          {...rest}
        />
      ) : null}
    </div>
  )
}

export default DzTitle
