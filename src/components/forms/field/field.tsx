import { FC, ReactNode } from 'react';
import styles from './field.module.css';

export type FieldProps = {
  error?: string;
  label: string;
  labelFor: string;
  children: ReactNode;
};

export const Field: FC<FieldProps> = ({ error, label, labelFor, children }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={labelFor}>{label}</label>
      {children}
      <span className={styles.error}>{error}</span>
    </div>
  );
};
