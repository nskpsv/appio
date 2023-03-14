import styles from './select.module.css';
import classNames from 'classnames/bind';
import { FC, SelectHTMLAttributes } from 'react';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
  error: boolean;
};

export const Select: FC<SelectProps> = ({
  options = [],
  error,
  ...otherProps
}) => {
  const cx = classNames.bind(styles);

  return (
    <select
      className={cx({ input: true, inputError: error })}
      {...otherProps}
    >
      {options.map((option, id) => (
        <option
          value={id === 0 ? '' : option}
          hidden={id === 0}
          disabled={id === 0}
          key={id}
        >
          {option}
        </option>
      ))}
    </select>
  );
};
