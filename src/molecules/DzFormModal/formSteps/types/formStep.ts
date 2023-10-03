import { ReactNode } from 'react';

export interface FormStep {
  id: string;
  formName: string;
  title?: string;
  primarySubtitle?: string;
  secondarySubtitle?: string;
  formValidator?: {
    validator: Function;
    args: [Array<string>, any];
    errorMessage?: string;
  };
  CTAProps: {
    text: string;
    type?: string;
    description?: ReactNode | string;
  };
  formSections: Array<Record<string, any>>;
}
