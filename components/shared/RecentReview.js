import React from 'react';
import { Star } from './Star';
import styles from '../../styles/shared/RecentReview.module.scss';

export const RecentReview = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={data.avatar} />
        </div>
        <div className={styles.detailInfo}>
          <p className={styles.name}>{data.name}</p>
          <div className={styles.history}>
            <span>
              <img src="/images/icons/people.svg" />
              {data.viewCount}
            </span>
            <span>
              <img src="/images/icons/star.svg" />
              {data.favoriteCount}
            </span>
          </div>
          <p className={styles.write}>
            You wrote a review for
            <span>{data.target}</span>
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <Star point={data.point}></Star>
          <span>
            {data.point} out of 5 stars |
            <span>{data.publishedDateTime}</span>
          </span>
        </div>
        <div className={styles.description}>{data.description}</div>
      </div>
    </div>
  )
}