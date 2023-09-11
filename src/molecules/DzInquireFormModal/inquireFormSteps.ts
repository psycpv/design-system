import { FORM_FIELD_TYPES } from '../DzForm/DzForm';
import { hasStringValue, isEmail, isPhoneNumber } from '../../utils';
import { ReactNode } from 'react';

interface FormStep {
  id: string;
  formName: string;
  title?: string;
  primarySubtitle?: string;
  secondarySubtitle?: string;
  CTAProps: {
    text: string;
    type: string;
    description?: ReactNode | string;
  };
  formSections: Array<Record<string, any>>;
}
export const inquireFormSteps: Array<FormStep> = [
  {
    id: '1',
    formName: 'inquiryForm',
    title: '',
    primarySubtitle: '',
    secondarySubtitle: '',
    formSections: [
      {
        id: '1a',
        fields: [
          {
            title: 'First Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              validator: hasStringValue,
              errorMsg: 'First Name is required.',
            },
          },
          {
            title: 'Last Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              validator: hasStringValue,
              errorMsg: 'Last Name is required.',
            },
          },
          {
            title: 'Email Address',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              type: 'email',
              validator: isEmail,
              errorMsg: 'Please enter a valid email address.',
            },
          },
          {
            title: 'Phone Number',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              type: 'tel',
              validator: isPhoneNumber,
              errorMsg: 'Invalid phone format',
            },
          },
          {
            title: 'Comments & Additional Interests',
            required: false,
            type: FORM_FIELD_TYPES.TEXTBOX,
            span: 12,
          },
        ],
      },
    ],
    CTAProps: {
      text: 'Inquire',
      type: 'submit',
    },
  },
];
