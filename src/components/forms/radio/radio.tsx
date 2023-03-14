import classNames from 'classnames/bind';
import { FC, InputHTMLAttributes } from 'react';
import styles from './radio.module.css';

export type Option = {
  name: string;
  value: string;
};

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  options: Option[];
  error?: boolean;
  defaultValue?: string;
};

const cx = classNames.bind(styles);

export const Radio: FC<RadioProps> = ({
  options,
  defaultValue,
  value,
  error,
  ...otherProps
}) => {
  const checked = value ?? defaultValue;

  return (
    <div className={cx({radio: true, radioError: error})}>
      {options.map((option, id) => {
        return (
          <div className={styles.button} key={id}>
            <input
              value={option.value}
              checked={checked === option.value}
              type="radio"
              id={option.name}
              {...otherProps}
            />
            <label htmlFor={option.name} className={styles.buttonLabel}>
              {option.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
