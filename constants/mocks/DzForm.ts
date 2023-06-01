import { MEDIA_TYPES } from '../../src/atoms/DzMedia';
import { FORM_FIELD_TYPES } from '../../src/molecules/DzForm/DzForm';
import {
  isEmail,
  hasStringValue,
  isPhoneNumber,
} from '../../src/utils/validators';
import { countries } from '../../src/constants/countries';

export const steps = [
  {
    id: '1',
    formName: 'form-step-1',
    title: 'Share Your Details',
    primarySubtitle:
      'Kindly share your contact and artwork details here, and our team will connect with you shortly',
    secondarySubtitle: 'All fields marked “*” are required.',
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
        ],
      },
    ],
    CTAProps: {
      text: 'Next: Artwork Details',
      showRightArrow: true,
    },
  },
  {
    id: '2',
    formName: 'form-step-2',
    title: 'Artwork Details',
    primarySubtitle:
      'Please provide as much information as possible. Unfortunately, we cannot accept submissions by artists of their own work.',
    formSections: [
      {
        id: '2a',
        fields: [
          {
            title: 'Artist Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              validator: hasStringValue,
              errorMsg: 'Artist Name is required.',
            },
          },
          {
            title: 'Title',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              validator: hasStringValue,
              errorMsg: 'Title is required.',
            },
          },
          {
            title: 'Year',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              type: 'string',
              validator: hasStringValue,
              errorMsg: 'Year is required.',
            },
          },
          {
            title: 'Medium',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
            data: {
              type: 'string',
              validator: hasStringValue,
              errorMsg: 'Medium is required.',
            },
          },
        ],
      },
      {
        id: '3a',
        sectionTitle: 'Location of Artwork',
        fields: [
          {
            required: true,
            type: FORM_FIELD_TYPES.SELECT,
            data: {
              options: countries,
            },
            span: 12,
          },
          {
            title: 'Width',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 2,
          },
          {
            title: 'Height',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 2,
          },
          {
            title: 'Depth',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 2,
          },
          {
            required: true,
            type: FORM_FIELD_TYPES.SELECT,
            span: 6,
            data: {
              options: [
                { title: 'In', value: 'in' },
                { title: 'Cm', value: 'cm' },
              ],
            },
          },
        ],
      },
    ],
    CTAProps: {
      text: 'Next: Additional Details',
      showRightArrow: true,
    },
  },
  {
    id: '3',
    formName: 'form-step-3',
    title: 'Additional Details (optional)',
    primarySubtitle:
      'Please provide any additional information you would like to share.',
    formSections: [
      {
        id: '4a',
        fields: [
          {
            title: 'Signatures, inscriptions, labels',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
          {
            title: 'Provenance, exhibitions, literature',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
          {
            title: 'Link to artwork, if available',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
          {
            title: 'Additional comments',
            required: false,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
        ],
      },
    ],
    CTAProps: {
      text: 'Next: Upload Files',
      showRightArrow: true,
    },
  },
  {
    id: '4',
    formName: 'form-step-4',
    title: 'Upload Files',
    secondarySubtitle:
      'Please upload up to three images of your artwork including any related files such as invoices, certificates of authenticity and/or previous valuation statements in JPG, PNG or PDF format. Each file must not exceed 10MB.',
    formSections: [
      {
        id: '5a',
        fields: [
          {
            required: true,
            type: FORM_FIELD_TYPES.UPLOADER,
            span: 9,
          },
        ],
      },
    ],
    CTAProps: {
      text: 'Submit Artwork',
      type: 'submit'
    },
  },
];

export const mediaProps = {
  type: MEDIA_TYPES.IMAGE,
  imgProps: {
    src:
      'https://assets.davidzwirner.com/v7/_assets_/davidzwirner/standalone-pages/consignment-portal-launch-page/consignment-50w/morandi-crop.jpg',
    alt: 'exhibition',
  },
};
