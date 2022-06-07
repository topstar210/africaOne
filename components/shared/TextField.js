import React from 'react';
import styles from '../../styles/shared/TextField.module.scss';

export const TextField = ({
  type = 'text',
  name = null,
  placeholder = '',
  value,
  onChange
}) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  }

  return (
    <div className={styles.textField}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={() => handleChange(event)}
      />
    </div>
  )
}