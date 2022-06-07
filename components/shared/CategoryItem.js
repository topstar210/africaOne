import React from 'react';
import styles from '../../styles/shared/CategoryItem.module.scss';

export const CategoryItem = ({ category }) => {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img src={category.avatar} />
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.left}>{category.name}</div>
          <div className={styles.right}>
            <span>{category.phone}</span>
            <span>{category.location}</span>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.star}>
            <div>
              <img src="/images/icons/star.svg" />
              <img src="/images/icons/star.svg" />
              <img src="/images/icons/star.svg" />
              <img src="/images/icons/star.svg" />
              <img src="/images/icons/star-o.svg" />
            </div>
            <span>{category.point}</span>
          </div>
          <div className={styles.types}>
            {
              category.types.map((type) => {
                return <span><img src="/images/icons/dot.svg" />{type}</span>
              })
            }
          </div>
          <div className={styles.tags}>
            {
              category.tags.map((tag) => {
                return <span><img src="/images/icons/tick.svg" />{tag}</span>
              })
            }
          </div>
          <div className={styles.detail}>
            <span>{category.phone}</span>
            <span>{category.location}</span>
          </div>
          <div className={styles.description}>{category.description}</div>
        </div>
      </div>
    </div>
  );
}