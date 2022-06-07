import React from 'react';
import styles from '../../styles/shared/Star.module.scss';

export const Star = ({ point }) => {
  return (
    <div className={styles.container}>
      <img src="/images/icons/star.svg" />
      <img src="/images/icons/star.svg" />
      <img src="/images/icons/star.svg" />
      <img src="/images/icons/star.svg" />
      <img src="/images/icons/star-o.svg" />
    </div>
  )
}