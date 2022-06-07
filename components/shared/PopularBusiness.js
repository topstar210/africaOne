import React from 'react';
import styles from '../../styles/shared/PopularBusiness.module.scss';

export const PopularBusiness = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <img src={data.avatar} />
        <div className={styles.cover} />
        <div className={styles.info}>
          <span>
            <img src="/images/icons/bookmark.svg" />
            Save
          </span>
          <span>
            <img src="/images/icons/eye.svg" />
            Preview
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>
          <span>AD</span>
          {data.name}
        </div>
        <div className={styles.star}>
          <img src="/images/icons/star.svg" />
          <img src="/images/icons/star.svg" />
          <img src="/images/icons/star.svg" />
          <img src="/images/icons/star.svg" />
          <img src="/images/icons/star-o.svg" />

          <span>{data.point} out of 5 stars</span>
        </div>

        <div className={styles.detail}>
          <div className={styles.user}>
            <img src={data.user} />
          </div>
          <div className={styles.description}>
            {data.description}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span><img src="/images/icons/marker-o-white.svg" />Kampala</span>
        <span>Closed Now</span>
      </div>
    </div>
  )
}