import classes from './Button.module.css';
import type { ButtonType } from '../../../types/types';

const Button = ({ children, onClick, type, disabled }: ButtonType) => {
  return (
    <button className={classes.button} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
