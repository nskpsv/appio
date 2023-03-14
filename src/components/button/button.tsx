import classnames from 'classnames/bind';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export type ButtonType = 'submit' | 'cancel';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType;
  label?: string;
};

export const Button: React.FC<ButtonProps> = ({
  buttonType = 'submit',
  label = '',
  disabled,
  ...otherProps
}) => {
  const cx = classnames.bind(styles);
  const style = {
    button: true,
    submitButton: buttonType === 'submit',
    cancelButton: buttonType === 'cancel',
  };
  
  return (
    <button className={cx(style)} disabled={disabled} {...otherProps}>
      {label}
    </button>
  );
};
