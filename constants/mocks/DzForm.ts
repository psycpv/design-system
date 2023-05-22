import { MEDIA_TYPES } from '../../src/atoms/DzMedia';
import { FORM_FIELD_TYPES } from '../../src/molecules/DzForm/DzFormBuilder';

export const steps = [
  {
    id: '1',
    title: 'Share Your Details',
    primarySubtitle:
      'Kindly share your contact and artwork details here, and our team will connect with you shortly',
    secondarySubtitle: 'All fields marked “*” are required.',
    formSections: [
      {
        fields: [
          {
            title: 'First Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
          {
            title: 'Last Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
          {
            title: 'Email Address',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
          {
            title: 'Phone Number',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
        ],
      },
    ],
    CTAProps: {
      text: 'Next: Artwork Details',
      showRightArrow: true,
    }
  },
  {
    id: '2',
    title: 'Artwork Details',
    primarySubtitle:
      'Please provide as much information as possible. Unfortunately, we cannot accept submissions by artists of their own work.',
    formSections: [
      {
        fields: [
          {
            title: 'Artist Name',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
          {
            title: 'Title',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
          {
            title: 'Year',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
          {
            title: 'Medium',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 6,
          },
        ],
      },
      {
        sectionTitle: 'Location of Artwork',
        fields: [
          {
            required: true,
            type: FORM_FIELD_TYPES.SELECT,
            data: {
              options: [],
            },
            span: 12,
          },
          {
            title: 'Width',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 2,
          },
          {
            title: 'Height',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 2,
          },
          {
            title: 'Depth',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 2,
          },
          {
            required: true,
            type: FORM_FIELD_TYPES.SELECT,
            span: 6,
            data: {},
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
    title: 'Additional Details (optional)',
    primarySubtitle:
      'Please provide any additional information you would like to share.',
    formSections: [
      {
        fields: [
          {
            title: 'Signatures, inscriptions, labels',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
          {
            title: 'Provenance, exhibitions, literature',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
          {
            title: 'Link to artwork, if available',
            required: true,
            type: FORM_FIELD_TYPES.INPUT,
            span: 12,
          },
          {
            title: 'Additional comments',
            required: true,
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
    title: 'Upload Files',
    secondarySubtitle:
      'Please upload up to three images of your artwork including any related files such as invoices, certificates of authenticity and/or previous valuation statements in JPG, PNG or PDF format. Each file must not exceed 10MB.',
    formSections: [
      {
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
