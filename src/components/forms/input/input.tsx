import classnames from 'classnames/bind';
import { FC, ForwardedRef, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error: boolean;
  ref?: ForwardedRef<HTMLInputElement>
};

const cx = classnames.bind(styles)

export const Input: FC<InputProps> = ({error, ...otherProps}) => {
  return (
    <input
      className={cx({ input: true, inputError: error })}
      {...otherProps}
    />
  );
}
