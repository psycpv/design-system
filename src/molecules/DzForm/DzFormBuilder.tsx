import React, { FC, useState, useMemo } from 'react';
import {
  DzText,
  DzButton,
  DzInputText,
  DzSelect,
  DzButtonProps,
  DzMedia,
  DzMediaProps,
  TEXT_SIZES,
  BUTTON_SIZES,
} from '../../atoms';
import { DzGridColumns, DzColumn, ColumnSpan } from '../../layout';

export const FORM_FIELD_TYPES = {
  INPUT: 'input',
  SELECT: 'select',
};

export interface DzFormBuilderProps {
  form: any;
  formAction: Function;
}
const styles: any = {
  formLayout: `
    flex
    flex-col
    gap-10
  `,
  titleText: `
    text-lg
    md:text-xl
  `,
  headInformation: `
    flex
    flex-col
    gap-[0.3125rem]
  `,
  secondarySubtitle: `
    text-black-60
  `,
};
const atomsPerType = {
  [FORM_FIELD_TYPES.INPUT]: data => {
    return <DzInputText {...data} />;
  },
  [FORM_FIELD_TYPES.SELECT]: data => {
    return <DzSelect {...data} />;
  },
};
export const DzFormBuilder: FC<DzFormBuilderProps> = ({ form, formAction }) => {
  const { title, primarySubtitle, secondarySubtitle, formSections, CTAProps } =
    form ?? {};
  const { text: CTAText, onClick } = CTAProps ?? {};
  return (
    <div className={styles.formLayout}>
      <div className={styles.headInformation}>
        {title ? <DzText className={styles.titleText} text={title} /> : null}
        {primarySubtitle ? <DzText text={primarySubtitle} /> : null}
        {secondarySubtitle ? (
          <DzText
            className={styles.secondarySubtitle}
            text={secondarySubtitle}
          />
        ) : null}
      </div>
      <div>
        {formSections.map(section => {
          const { sectionTitle, fields = [] } = section ?? {};
          return (
            <>
              {sectionTitle ? <DzText text={sectionTitle} /> : null}
              {fields?.length ? (
                <DzGridColumns>
                  {fields?.map((field, key) => {
                    const { title, required, type, data = {}, span } =
                      field ?? {};
                    const requiredTag = required ? '*' : '';
                    const componentProps = {
                      ...(title ? { title: `${title}${requiredTag}` } : {}),
                      ...(required ? { required } : {}),
                      ...data,
                      key: `${title}-${key}`,
                    };
                    const Component = atomsPerType?.[type]?.(componentProps);
                    return Component ? (
                      <DzColumn span={span ?? 12}>{Component}</DzColumn>
                    ) : null;
                  })}
                </DzGridColumns>
              ) : null}
            </>
          );
        })}
      </div>
      <DzButton
        {...CTAProps}
        size={BUTTON_SIZES.LARGE}
        onClick={onClick ?? formAction}
      >
        {CTAText}
      </DzButton>
    </div>
  );
};

export default DzFormBuilder;
