import React from 'react';
import css from './Button.module.css';

export const Button = ({ children = "Кнопка", type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className={css.button}>{children}</button>
  )
}
