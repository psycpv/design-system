import React, { Fragment, useState } from 'react';
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
    focus:outline-none
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
    outline-none
    focus:outline-none
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
}) => {
  console.log('ENTER TRY TITLE::', title)
  const [selected, setSelected] = useState<SelectOption>(
    options?.[selectId] ?? null
  );
  const [multipleSelect, setMultipleSelect] = useState<SelectOption[]>(
    []
  );

  const disabledStyles = disabled ? styles.disabled : '';

  const itemListRender = (option: SelectOption, useCheckbox: boolean) =>
    useCheckbox ? (
      <DzCheckbox title={option?.title} disabled={disabled} />
    ) : (
      <span className={cn(styles.optionListText)}>{option?.title}</span>
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
    <div>
      <Listbox
        value={useCheckbox ? multipleSelect : selected}
        onChange={(args: any) => {
          if (!useCheckbox) {
            setSelected(args);
          } else {
            setMultipleSelect(args);
          }
        }}
        multiple={useCheckbox}
      >
        {({ open }) => (
          <>
            {titleSection}
            {subTitle}
            <div className="relative">
              <Listbox.Button
                className={cn(
                  styles.selectBar,
                  disabledStyles,
                  hasError ? 'border-red-100 hover:border-red-100' : ''
                )}
              >
                <span className={cn(styles.btnSelect)}>
                  {useCheckbox ? multipleSelect?.[0]?.title : selected?.title}
                </span>
                <span className={cn(styles.selectSvgContainer)}>
                  <BoldArrowDown fill="#4D4D4D" />
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
                <Listbox.Options className={cn(styles.listOptions)}>
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
                          className={cn(
                            styles.listOptionWrapper,
                            disabledStyles
                          )}
                        >
                          {itemListRender(option, useCheckbox)}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default DzSelect;
