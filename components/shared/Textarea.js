import React from 'react';
import styles from '../../styles/shared/Textarea.module.scss';

export const Textarea = ({
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
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={() => handleChange(event)}
      />
    </div>
  )
}