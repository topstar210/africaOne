import React from 'react';
import { Header, Footer } from '../components/layout';
import { RecentReview } from '../components/shared';
import styles from '../styles/pages/Dashboard.module.scss';

const Dashboard = () => {
  const reviewInfo = [
    {
      name: 'Yusuf Kayiwa',
      avatar: '/images/pages/dashboard/default-user.png',
      target: 'Cafe Javas Kampala',
      viewCount: 205,
      favoriteCount: 572,
      point: 4.5,
      publishedDateTime: 'Aug 22, 2020  2:36pm',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur`
    }
  ]
  return (
    <>
      <Header />
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <div className={styles.header}>
              <div className={styles.left}>
                <div className={styles.avatar}>
                  <img src="/images/pages/dashboard/1.png" />
                </div>
                <div className={styles.detailInfo}>
                  <p className={styles.name}>Prince Yusuf K.</p>
                  <p className={styles.location}>Ntinda, Kampala</p>
                  <div>
                    <span>
                      <img src="/images/icons/star-o.svg" />
                      <b>14</b>Reviews
                    </span>
                    <span>
                      <img src="/images/icons/camera.svg" />
                      <b>03</b>Reviews
                    </span>
                  </div>

                  <div className={styles.subRight}>
                    <p>
                      <img src="/images/icons/add-photos.svg" />
                      <span>Add Profile Photo</span>
                    </p>
                    <p>
                      <img src="/images/icons/profile-card.svg" />
                      <span>Update Your Profile</span>
                    </p>
                  </div>
                  <div className={styles.subBodyRight}>
                    <p className={styles.title}>About Prince Yusuf K.</p>
                    <div className={styles.list}>
                      <div className={styles.item}>
                        <p className={styles.name}>Location</p>
                        <p>Ntinda, Kampala</p>
                      </div>
                      <div className={styles.item}>
                        <p className={styles.name}>Member Since</p>
                        <p>January, 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <p>
                  <img src="/images/icons/add-photos.svg" />
                  <span>Add Profile Photo</span>
                </p>
                <p>
                  <img src="/images/icons/profile-card.svg" />
                  <span>Update Your Profile</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <div className={styles.body}>
              <div className={styles.left}>
                <div className={styles.sidebar}>
                  <p className={styles.title}>Your Profile</p>
                  <ul>
                    <li className={styles.active}>
                      <img src="/images/icons/full-star.svg" />
                      Reviews
                    </li>
                    <li>
                      <img src="/images/icons/check-circle.svg" />
                      Check-Ins
                    </li>
                    <li>
                      <img src="/images/icons/clipboard.svg" />
                      Listings
                    </li>
                  </ul>
                </div>
                <div className={styles.content}>
                  <p className={styles.title}>Reviews</p>
                  <p className={styles.description}>
                    It’s your turn — review everything from your favourite food place to your favourite root canal. Write reviews to contribute to the AfricaOne community and help your friends find all the local gems that you love.
                  </p>

                  <button type="button">
                    <img src="/images/icons/star-white.svg" />
                    Write A Reviews
                  </button>
                  <p className={styles.subTitle}>Recent Reviews</p>
                  {
                    reviewInfo.map((item, index) => {
                      return <RecentReview data={item} key={index} />
                    })
                  }
                </div>
              </div>
              <div className={styles.right}>
                <div>
                  <p className={styles.title}>About Prince Yusuf K.</p>
                  <div className={styles.list}>
                    <div className={styles.item}>
                      <p className={styles.name}>Location</p>
                      <p>Ntinda, Kampala</p>
                    </div>
                    <div className={styles.item}>
                      <p className={styles.name}>Member Since</p>
                      <p>January, 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Dashboard;