import React, { useEffect, useRef, useState } from "react";
import { LightBox } from "../../components/shared";
import { Header, Footer } from "../../components/layout";
import styles from "../../styles/pages/photos/Index.module.scss";

const Photos = () => {
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const lightBoxItems = [
    "/images/pages/photos/index/photos/1.png",
    "/images/pages/photos/index/photos/2.png",
    "/images/pages/photos/index/photos/3.png",
    "/images/pages/photos/index/photos/4.png",
    "/images/pages/photos/index/photos/5.png",
    "/images/pages/photos/index/photos/6.png",
  ];

  function handleOpen(index) {
    setIsOpenLightBox(true);
    setActiveIndex(index);
  }

  const handleClose = () => {
    setIsOpenLightBox(false);
  };

  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.title}>Photos of Cafe Javas Kampala</p>
            <div>
              <div className={styles.left}>
                <div className={styles.avatar}>
                  <img src="/images/pages/photos/index/avatar.png" />
                </div>
                <div className={styles.detailInfo}>
                  <p className={styles.name}>Cafe Javas Kampala</p>
                  <div className={styles.point}>
                    <div className={styles.star}>
                      <img src="/images/icons/star.svg" />
                      <img src="/images/icons/star.svg" />
                      <img src="/images/icons/star.svg" />
                      <img src="/images/icons/star.svg" />
                      <img src="/images/icons/star-o.svg" />
                    </div>
                    <span>14</span>
                  </div>
                  <button>
                    <img src="/images/icons/add-photos-white.svg" />
                    Add Photos
                  </button>
                </div>
              </div>
              <div className={styles.right}>
                <button>
                  <img src="/images/icons/add-photos-white.svg" />
                  Add Photos
                </button>
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <div>
              <img
                src="/images/pages/photos/index/photos/1.png"
                onClick={() => handleOpen(0)}
              />
              <img
                src="/images/pages/photos/index/photos/2.png"
                onClick={() => handleOpen(1)}
              />
              <img
                src="/images/pages/photos/index/photos/3.png"
                onClick={() => handleOpen(2)}
              />
            </div>
            <div>
              <img
                src="/images/pages/photos/index/photos/4.png"
                onClick={() => handleOpen(3)}
              />
              <img
                src="/images/pages/photos/index/photos/5.png"
                onClick={() => handleOpen(4)}
              />
              <img
                src="/images/pages/photos/index/photos/6.png"
                onClick={() => handleOpen(5)}
              />
            </div>
          </div>
        </div>
        {isOpenLightBox && (
          <LightBox
            images={lightBoxItems}
            index={activeIndex}
            onClose={handleClose}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Photos;
