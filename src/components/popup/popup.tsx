import classNames from 'classnames/bind';
import { FC, MouseEvent } from 'react';
import { Button } from '../button/button';
import styles from './popup.module.css';

export type PopupProps = {
  meesage: string;
  show: boolean;
  onClose: () => void;
};

const cx = classNames.bind(styles);

export const Popup: FC<PopupProps> = ({ meesage, show, onClose }) => {
  const handleClose = (e: MouseEvent<HTMLButtonElement & HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={cx({background: true, visible: show})} onClick={handleClose}>
      <div className={styles.popup} onClick={(e) => {e.stopPropagation()}}>
        <span className={styles.message} onClick={(e) => {e.stopPropagation()}}>{meesage}</span>
        <Button label="OK" onClick={handleClose} />
      </div>
    </div>
  );
};
