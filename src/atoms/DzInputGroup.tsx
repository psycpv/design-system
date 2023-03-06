import { cn } from '../utils/classnames';
import React, { FC, useState, useEffect } from 'react';
import { DzCheckbox, CheckProps } from './DzCheckbox';
import { DzRadioButton, RadioProps } from './DzRadioButton';
import { DzText, TEXT_SIZES, TEXT_TYPES } from './DzText';
import { v4 as uuidv4 } from 'uuid';

export const INPUT_GROUP_TYPES = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
};

export const INPUT_GROUP_TYPES_NAMES = [
  INPUT_GROUP_TYPES.CHECKBOX,
  INPUT_GROUP_TYPES.RADIO,
] as const;
export type InputGroupTypes = typeof INPUT_GROUP_TYPES_NAMES[number];
export type ItemProps = CheckProps | RadioProps;

export interface DzInputGroupProps {
  type: InputGroupTypes;
  items?: CheckProps[] | RadioProps[];
  title?: string;
  subtitle?: string;
  multiSelect?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  formName?: string;
}

const styles = {
  inputGroupWrapper: `
    flex
    flex-col
    gap-5
  `,
  itemListContainer: `
    flex
    flex-col
    border
    border-black-20
    rounded-0
    max-w-fit
  `,
  listItem: `
    p-5
    max-w-fit
    bg-white-100
  `,
  itemListBorder: `
    border-t
    border-b-0
    border-x-0
    border
    border-black-20
  `,
  error: `
    !text-red-100
    !border-red-100
  `,
};
interface InputStateElement {
  id: string;
  value: string;
}

export const DzInputGroups: FC<DzInputGroupProps> = ({
  type = INPUT_GROUP_TYPES.CHECKBOX,
  title = '',
  subtitle = '',
  disabled = false,
  formName = '',
  items = [],
  hasError = false,
}) => {
  const [isValidValue, setIsValidValue] = useState<boolean>(!hasError);
  const [formNameId] = useState<string>(formName || `${uuidv4()}-${title}`);
  const [_, setFormState] = useState<InputStateElement[]>([]);
  const errorClass = !isValidValue ? styles.error : '';

  const handleChange = (e: any) => {
    setFormState(state => {
      const stateCopy = [...state];
      stateCopy.push({ id: e.target.id, value: e.target.value });
      return stateCopy;
    });
  };

  useEffect(() => {
    setIsValidValue(!hasError);
  }, [hasError]);

  const getListItem = (type: InputGroupTypes, props: ItemProps) =>
    type === INPUT_GROUP_TYPES.CHECKBOX ? (
      <DzCheckbox {...props} name={formNameId} disabled={disabled} />
    ) : (
      <DzRadioButton {...props} name={formNameId} disabled={disabled} />
    );

  const itemsRender = items
    ? items.map((item, key) => {
        const intermediateClass = key !== 0 ? styles.itemListBorder : '';
        return (
          <li key={item.id} className={cn(styles.listItem, intermediateClass)}>
            {getListItem(type, item)}
          </li>
        );
      })
    : null;

  const titleSection = title ? (
    <DzText
      className={cn(errorClass)}
      textSize={TEXT_SIZES.SMALL}
      textType={TEXT_TYPES.LABEL}
      text={title}
      htmlFor={subtitle}
      disabled={disabled}
    />
  ) : null;

  const subTitle = subtitle ? (
    <DzText
      className={cn('text-black-60', errorClass)}
      textSize={TEXT_SIZES.XS}
      textType={TEXT_TYPES.P}
      text={subtitle}
      disabled={disabled}
    />
  ) : null;

  const legendRender = title ? (
    <legend className="sr-only">{title}</legend>
  ) : null;

  return (
    <fieldset>
      {legendRender}
      <div className={cn(styles.inputGroupWrapper)}>
        <div>
          {titleSection}
          {subTitle}
        </div>
        <ul
          onChange={handleChange}
          className={cn(errorClass, styles.itemListContainer)}
        >
          {itemsRender}
        </ul>
      </div>
    </fieldset>
  );
};

export default DzInputGroups;
