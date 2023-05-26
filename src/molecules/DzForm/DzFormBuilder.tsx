import React, { FC, Fragment } from 'react';
import {
  DzText,
  DzButton,
  DzInputText,
  DzSelect,
  DzFileUploader,
  BUTTON_SIZES,
  TEXT_SIZES,
} from '../../atoms';
import { DzGridColumns, DzColumn } from '../../layout';
import { cn } from '../../utils/classnames';
import { FORM_FIELD_TYPES } from './DzForm';

export interface DzFormBuilderProps {
  form: any;
  formAction: Function;
  submitAction: Function;
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
  sectionTitle:`
    my-5
  `,
  secondarySubtitle: `
    text-black-60
  `,
  ctaButton: `
    mb-10
    md:mb-0
    md:ml-auto
    w-[20.9375rem]  
  `,
};

const atomsPerType = {
  input: data => {
    return <DzInputText {...data} />;
  },
  select: data => {
    return <DzSelect {...data} />;
  },
  uploader: data => {
    return <DzFileUploader {...data} />;
  },
};

export const DzFormBuilder: FC<DzFormBuilderProps> = ({ form, formAction }) => {
  const { formName, title, primarySubtitle, secondarySubtitle, formSections, CTAProps } =
    form ?? {};
  const { text: CTAText, onClick } = CTAProps ?? {};
  return (
    <div className={cn(styles.formLayout)}>
      <div className={cn(styles.headInformation)}>
        {title ? (
          <DzText
            className={cn(styles.titleText)}
            textSize={TEXT_SIZES.LARGE}
            text={title}
          />
        ) : null}
        {primarySubtitle || secondarySubtitle ? (
          <div>
            {primarySubtitle ? <DzText text={primarySubtitle} /> : null}
            {secondarySubtitle ? (
              <DzText
                className={cn(styles.secondarySubtitle)}
                text={secondarySubtitle}
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <div>
        {formSections.map(section => {
          const { id, sectionTitle, fields = [] } = section ?? {};
          return (
            <Fragment key={id}>
              {sectionTitle ? <DzText className={styles.sectionTitle} text={sectionTitle} /> : null}
              {fields?.length ? (
                <DzGridColumns key={id}>
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
                      <DzColumn
                        key={`${title}-${key}`}
                        className="mt-auto"
                        span={span ?? 12}
                      >
                        {Component}
                      </DzColumn>
                    ) : null;
                  })}
                </DzGridColumns>
              ) : null}
            </Fragment>
          );
        })}
      </div>
      <DzButton
        {...CTAProps}
        className={cn(styles.ctaButton)}
        size={BUTTON_SIZES.LARGE}
        onClick={onClick ?? formAction}
        form={formName}
      >
        {CTAText}
      </DzButton>
    </div>
  );
};

export default DzFormBuilder;
