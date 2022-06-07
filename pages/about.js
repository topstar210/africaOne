import React from 'react';
import { Header, Footer } from '../components/layout';
import styles from '../styles/pages/About.module.scss';

const About = () => {
  const aboutInfo = [
    {
      name: 'Value 1',
      avatar: '/images/pages/about/business-time.svg',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'
    },
    {
      name: 'Value 2',
      avatar: '/images/pages/about/business-time.svg',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'
    },
    {
      name: 'Value 3',
      avatar: '/images/pages/about/business-time.svg',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.'
    }
  ];

  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div>
            <div className={styles.left}>
              <p className={styles.title}>
                Find your Best
              </p>
              <p className={styles.description}>
                find your interests anywhere anytime with AfricaOne App
              </p>
              <img src="/images/pages/about/pc.png" />
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                <br /><br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
              </p>
            </div>
            <div className={styles.right}>
              <img src="/images/pages/about/pc.png" />
            </div>
          </div>

          <div>
            <div className={styles.items}>
              {
                aboutInfo.map((item, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <img src={item.avatar} className={styles.avatar} />
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;