import React, { FC } from 'react';
import {
  DzText,
  DzButton,
  DzInputText,
  DzSelect,
  DzFileUploader,
  BUTTON_SIZES,
} from '../../atoms';
import { DzGridColumns, DzColumn } from '../../layout';
import { cn } from '../../utils/classnames';

export const FORM_FIELD_TYPES = {
  INPUT: 'input',
  SELECT: 'select',
  UPLOADER: 'uploader',
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
  ctaButton:`
    ml-auto
    w-[20.9375rem]  
  `
};

const atomsPerType = {
  [FORM_FIELD_TYPES.INPUT]: data => {
    return <DzInputText {...data} />;
  },
  [FORM_FIELD_TYPES.SELECT]: data => {
    return <DzSelect {...data} />;
  },
  [FORM_FIELD_TYPES.UPLOADER]: data => {
    return <DzFileUploader {...data} />;
  },
};

export const DzFormBuilder: FC<DzFormBuilderProps> = ({ form, formAction }) => {
  const { title, primarySubtitle, secondarySubtitle, formSections, CTAProps } =
    form ?? {};
  const { text: CTAText, onClick } = CTAProps ?? {};
  return (
    <div className={cn(styles.formLayout)}>
      <div className={cn(styles.headInformation)}>
        {title ? <DzText className={cn(styles.titleText)} text={title} /> : null}
        {primarySubtitle ? <DzText text={primarySubtitle} /> : null}
        {secondarySubtitle ? (
          <DzText
            className={cn(styles.secondarySubtitle)}
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
                      <DzColumn className="mt-auto" span={span ?? 12}>
                        {Component}
                      </DzColumn>
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
        className={cn(styles.ctaButton)}
        size={BUTTON_SIZES.LARGE}
        onClick={onClick ?? formAction}
      >
        {CTAText}
      </DzButton>
    </div>
  );
};

export default DzFormBuilder;
