import React from 'react';
import Link from 'next/link';
import { Header, Footer } from '../../components/layout';
import styles from '../../styles/pages/photos/Create.module.scss';

const CreatePhotos = () => {
  const stepInfo = [
    {
      id: 1,
      color: '#58D32B',
      description: 'Refrain from posting shaky or out of focus photos.'
    },
    {
      id: 2,
      color: '#F22A32',
      description: 'Your photos should be well lit and bright.Don’t be afraid to use the flash on your camera.'
    },
    {
      id: 3,
      color: '#F89B06',
      description: 'If you’re applying filters, don’t overdo them.Subtlety is key.'
    },
    {
      id: 4,
      color: '#067FF7',
      description: 'Lastly, please only post photos of the business.'
    }
  ]
  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <p className={styles.title}>
            <span>Cafe Javas Kampala:</span>
            Add Photos
          </p>
          <Link href="/photos">
            <span className={styles.back}>Show all photos</span>
          </Link>
          <div className={styles.content}>
            <div className={styles.left}>
              <p>
                <img src="/images/icons/warning.svg" />
                Warning!
              </p>
              <div className={styles.steps}>
                {
                  stepInfo.map((item, index) => {
                    return (
                      <div className={styles.item}>
                        <span style={{ background: item.color }} >{item.id}</span>
                        <span>{item.description}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={styles.right}>
              <img src="/images/pages/photos/create/1.png" />
              <p className={styles.title}>Drag and drop photos here</p>
              <p className={styles.or}>or</p>
              <button type="button">Browse Photos</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreatePhotos;