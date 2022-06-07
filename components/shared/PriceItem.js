import React from "react";
import styles from "../../styles/shared/PriceItem.module.scss";

export const PriceItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${item.recommended && styles.active}`}>
        {item.recommended && (
          <img src="/images/pages/pricing/pin.png" className={styles.pin} />
        )}
        <p className={styles.name}>{item.name}</p>
        <img src={item.avatar} className={styles.avatar} />
        <p className={styles.duration}>{item.duration}</p>
        <p className={styles.price}>{item.price}</p>
        <p className={styles.method}>{item.method}</p>
        <button type="button">CHOOSE PLAN</button>

        <ul className={styles.features}>
          {item.features.map((item) => {
            return (
              <li>
                {item.status ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-circle"
                    class="svg-inline--fa fa-check-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="times-circle"
                    class="svg-inline--fa fa-times-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                    ></path>
                  </svg>
                )}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
