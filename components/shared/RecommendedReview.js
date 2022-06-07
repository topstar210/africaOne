import React from 'react';
import styles from '../../styles/shared/RecommendedReview.module.scss';

export const RecommendedReview = ({ data }) => {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.left}>
          <img src={data.avatar} />
        </div>
        <div className={styles.right}>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.detail}>
            <span className={styles.viewCount}>
              <img src="/images/icons/people.svg" />
              {data.viewCount}
            </span>
            <span>
              <img src="/images/icons/star.svg" />
              {data.favoriteCount}
            </span>
          </p>
          <p className={styles.target}>
            Wrote a review for <span>{data.target}</span>
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.detail}>
          <div className={styles.star}>
            <img src="/images/icons/star.svg" />
            <img src="/images/icons/star.svg" />
            <img src="/images/icons/star.svg" />
            <img src="/images/icons/star.svg" />
            <img src="/images/icons/star-o.svg" />

            <span>{data.point} out of 5 stars</span>
          </div>
          <span className={styles.date}>| {data.publishedDateTime}</span>
        </div>
        <div className={styles.description}>{data.description}</div>
        <div>
          <span className={styles.interesting}>
            <img src="/images/icons/interesting.svg" />
            {data.interestingCount}
          </span>
          <span className={styles.lol}>
            <img src="/images/icons/lol.svg" />
            {data.lolCount}
          </span>
          <span className={styles.love}>
            <img src="/images/icons/love.svg" />
            {data.loveCount}
          </span>
        </div>
      </div>
    </div>
  )
}