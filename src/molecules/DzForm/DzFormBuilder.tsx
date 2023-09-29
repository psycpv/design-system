import React, { FC, Fragment } from 'react';
import {
  DzText,
  DzTextBox,
  DzButton,
  DzInputText,
  DzSelect,
  DzFileUploader,
  DzCheckbox,
  BUTTON_SIZES,
  TEXT_SIZES,
} from '../../atoms';
import { DzGridColumns, DzColumn } from '../../layout';
import { cn } from '../../utils/classnames';
import { FORM_FIELD_TYPES } from './DzForm';

export interface DzFormBuilderProps {
  form: any;
  formAction: Function;
  isSubmitDisabled?: boolean;
  submitAction: Function;
  onFieldValidation: Function;
  onChangeInput: Function;
}
const styles: any = {
  formLayout: `
    flex
    flex-col
    gap-5
    md:gap-10
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
  sectionTitle: `
    my-5
  `,
  secondarySubtitle: `
    text-black-60
  `,
  ctaButton: `
    mb-10
    md:mb-0
    md:ml-auto
    w-full        
  `,
  ctaContainer: `
    flex
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
  text: text => {
    return <DzText text={text} />;
  },
  textbox: data => {
    return <DzTextBox {...data} />;
  },
  checkbox: data => {
    return <DzCheckbox {...data} />;
  },
};

export const DzFormBuilder: FC<DzFormBuilderProps> = ({
  form,
  formAction,
  isSubmitDisabled,
  onFieldValidation,
  onChangeInput,
}) => {
  const {
    formName,
    title,
    primarySubtitle,
    secondarySubtitle,
    formSections,
    CTAProps,
  } = form ?? {};
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
              {sectionTitle ? (
                <DzText
                  className={cn(styles.sectionTitle)}
                  text={sectionTitle}
                />
              ) : null}
              {fields?.length ? (
                <DzGridColumns key={id}>
                  {fields?.map((field, key) => {
                    const {
                      name,
                      placeholder,
                      title,
                      required,
                      type,
                      data = {},
                      span,
                      className,
                    } = field ?? {};
                    const requiredTag = required ? '*' : '';
                    const componentProps = {
                      ...(title ? { title: `${title}${requiredTag}` } : {}),
                      ...(required ? { required } : {}),
                      placeholder,
                      ...data,
                      onChange: event =>
                        type === FORM_FIELD_TYPES.CHECKBOX
                          ? onChangeInput?.(name, event.target.checked)
                          : onChangeInput?.(name, event.target.value),
                      onValidation: isValid => onFieldValidation(key, isValid),
                    };
                    if (type === FORM_FIELD_TYPES.TEXTBOX) {
                      componentProps.maxWordLength = field.maxWordLength;
                    }
                    if (type === FORM_FIELD_TYPES.CHECKBOX) {
                      delete componentProps.onValidation;
                      delete componentProps.errorMsg;
                      delete componentProps.validator;
                    }
                    const Component = atomsPerType?.[type]?.(componentProps);
                    return Component ? (
                      <DzColumn
                        key={`${sectionTitle}-${title}-${key}`}
                        className={`mt-auto ${className || ''}`}
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
      <DzGridColumns className={CTAProps.description ? '' : 'gap-y-0'}>
        <DzColumn span={[12, 6]}>
          {CTAProps.description && (
            <DzText text={CTAProps.description} className="flex-1" />
          )}
        </DzColumn>
        <DzColumn span={[12, CTAProps.description ? 6 : 12]}>
          <DzButton
            {...CTAProps}
            className={cn(styles.ctaButton)}
            disabled={isSubmitDisabled}
            size={BUTTON_SIZES.LARGE}
            onClick={onClick ?? formAction}
            form={formName}
          >
            {CTAText}
          </DzButton>
        </DzColumn>
      </DzGridColumns>
    </div>
  );
};

export default DzFormBuilder;
