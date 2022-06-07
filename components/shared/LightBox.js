import React, { useState } from 'react';
import styles from '../../styles/shared/LightBox.module.scss';

export const LightBox = ({
  index = 0,
  images = [],
  onClose = null
}) => {
  const [activeIndex, setActiveIndex] = useState(index);
  const handleBack = () => {
    if (activeIndex != 0) setActiveIndex(activeIndex - 1);
  }

  const handleForward = () => {
    if (activeIndex < images.length - 1) setActiveIndex(activeIndex + 1);
  }

  const handleClose = () => {
    onClose();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backdrop} />
        <div className={styles.main}>
          <div className={styles.header}>
            <button type="button" onClick={() => handleClose()}>
              <span>Close</span>
              <img src="/images/icons/close.svg" />
            </button>
          </div>
          <div className={styles.body}>
            <button className={styles.left} onClick={() => handleBack()}>
              <img src="/images/icons/lightbox-left.svg" />
            </button>
            <div>
              <img src={images[activeIndex]} />
            </div>
            <button className={styles.right} onClick={() => handleForward()}>
              <img src="/images/icons/lightbox-right.svg" />
            </button>
          </div>
          <div className={styles.footer}>
            {
              images.map((item, index) => <img className={index === activeIndex && styles.active} src={item} />)
            }
          </div>
        </div>
      </div>
    </>
  );
}