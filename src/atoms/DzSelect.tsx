import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { cn } from '../utils/classnames';
import { DzText, TEXT_SIZES, TEXT_TYPES } from './DzText';
import { Listbox, Transition } from '@headlessui/react';
import { BoldArrowDown } from '../svgIcons/boldArrowDown';
import { DzCheckbox } from './DzCheckbox';

export interface SelectOption {
  id: string;
  title: string;
  value: string;
  disabled: boolean;
}

export interface DzSelectProps {
  title?: string;
  options: SelectOption[];
  subtitle?: string;
  selectId?: number;
  disabled?: boolean;
  errorMsg?: string;
  hasError?: boolean;
  useCheckbox?: boolean;
  className?: string;
  onSelect?: Function;
  customSelectClass?: string;
  customListClass?: string;
  customItemClass?: string;
  customIcon?: ReactNode;
}

const styles = {
  selectBar: `
    relative
    w-full
    cursor-default
    border-b
    border-black-40
    bg-transparent
    py-[0.625rem]
    pl-[0.625rem]
    pr-10 text-left
    outline-0
    text-black-60
    focus:outline-transparent
    hover:text-black-100
    hover:border-black-60
  `,
  btnSelect: `
    block
    truncate
  `,
  selectSvgContainer: `
    pointer-events-none
    absolute
    inset-y-0
    right-0
    flex
    items-center
    pr-2
  `,
  listOptions: `
    absolute
    z-10
    mt-1
    max-h-60
    w-full
    overflow-auto
    bg-white-100
    text-sm
    py-1
    shadow-lg
    outline-transparent
    focus:outline-transparent
    scrollbar
    scrollbar-h-[0.1875rem]
    scrollbar-w-[0.1875rem]
    scrollbar-thumb-black-60
    scrollbar-track-black-20
    scrollbar-rounded-[0.1875rem]
  `,
  active: `
    text-black-100
  `,
  inactive: `
    text-black-60
  `,
  listOption: `
    relative
    cursor-default
    select-none
    py-2
    pl-3
    pr-9
    hover:text-black-100
  `,
  listOptionWrapper: `
    block
    truncate
  `,
  optionListText: `
    hover:border-b
    hover:border-black-100
  `,
  disabled: `
    !text-black-40
    !hover:text-black-40
    !pointer-events-none
  `,
  error: `
    block
    pt-[0.3125rem]
    text-xs
    text-red-100
  `,
};
export const DzSelect: React.FunctionComponent<DzSelectProps> = ({
  title = '',
  subtitle = '',
  selectId = 0,
  disabled = false,
  options = [],
  errorMsg = '',
  hasError = false,
  useCheckbox = false,
  className = '',
  onSelect = () => null,
  customSelectClass = '',
  customIcon,
  customListClass = '',
  customItemClass = '',
}) => {
  const [selected, setSelected] = useState<SelectOption>(
    options?.[selectId] ?? null
  );
  const [multipleSelect, setMultipleSelect] = useState<SelectOption[]>([]);

  const disabledStyles = disabled ? styles.disabled : '';

  useEffect(() => {
    setSelected(options?.[selectId]);
  }, [options]);

  const itemListRender = (option: SelectOption, useCheckbox: boolean) =>
    useCheckbox ? (
      <DzCheckbox title={option?.title} disabled={disabled} />
    ) : (
      <span className={cn(styles.optionListText, customItemClass)}>
        {option?.title}
      </span>
    );

  const errorMsgRender = hasError ? (
    <span className={cn(styles.error)}>{errorMsg}</span>
  ) : null;

  const titleSection = title ? (
    <DzText
      textSize={TEXT_SIZES.XS}
      textType={TEXT_TYPES.LABEL}
      text={title}
      htmlFor={subtitle}
      disabled={disabled}
    />
  ) : null;

  const subTitle = subtitle ? (
    <DzText
      className="text-black-60"
      textSize={TEXT_SIZES.XS}
      textType={TEXT_TYPES.P}
      text={subtitle}
      disabled={disabled}
    />
  ) : null;

  return (
    <Listbox
      as="div"
      className={cn('relative', className)}
      value={useCheckbox ? multipleSelect : selected}
      onChange={(args: any) => {
        if (!useCheckbox) {
          setSelected(args);
        } else {
          setMultipleSelect(args);
        }
        if (onSelect) onSelect(args);
      }}
      multiple={useCheckbox}
    >
      {({ open }) => (
        <>
          {titleSection}
          {subTitle}

          <Listbox.Button
            className={cn(
              styles.selectBar,
              disabledStyles,
              hasError ? 'border-red-100 hover:border-red-100' : '',
              customSelectClass
            )}
          >
            <span className={cn(styles.btnSelect)}>
              {useCheckbox ? multipleSelect?.[0]?.title : selected?.title}
            </span>
            <span className={cn(styles.selectSvgContainer)}>
              {customIcon ? customIcon : <BoldArrowDown fill="#4D4D4D" />}
            </span>
          </Listbox.Button>
          {errorMsgRender}

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={cn(styles.listOptions, customListClass)}
            >
              {options?.map(option => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    cn(
                      active ? styles.active : styles.inactive,
                      styles.listOption
                    )
                  }
                  value={option}
                  disabled={option?.disabled}
                >
                  {() => (
                    <div
                      className={cn(styles.listOptionWrapper, disabledStyles)}
                    >
                      {itemListRender(option, useCheckbox)}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default DzSelect;
