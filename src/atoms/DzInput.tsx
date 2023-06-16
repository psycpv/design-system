import React, {
  InputHTMLAttributes,
  ForwardRefExoticComponent,
  ForwardedRef,
  forwardRef,
} from 'react';
export interface InputTypeProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: any;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const DzInput: ForwardRefExoticComponent<InputTypeProps> = forwardRef(
  (
    { type, id, name, value, ...rest },
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={forwardedRef}
        type={type}
        id={id}
        name={name}
        value={value}
        {...rest}
      />
    );
  }
);
export default DzInput;
