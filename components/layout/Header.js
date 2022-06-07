import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/layouts/Header.module.scss";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      {open && (
        <div className={`${styles.mobile} ${open && styles.active}`}>
          <img
            src="/images/icons/time.svg"
            className={styles.close}
            onClick={() => setOpen(false)}
          />
          <ul className={styles.menus}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contacts">Contact</Link>
            </li>
            <li>
              <Link href="/login">
                <a>
                  <img src="/images/icons/user-plus.svg" />
                  Join Now
                </a>
              </Link>
            </li>
            <li>
              <Link href="/listing/create">
                <button>
                  <img src="/images/icons/plus.svg" />
                  Add Listing
                </button>
              </Link>
            </li>
          </ul>
          <p>CATEGORIES</p>
          <ul className={styles.categories}>
            <li>
              <Link href="/category">Restaurants</Link>
            </li>
            <li>
              <Link href="/category">Hotels</Link>
            </li>
            <li>
              <Link href="/category">Beauty & Spa</Link>
            </li>
            <li>
              <Link href="/category">Autos</Link>
            </li>
            <li>
              <Link href="/category">Shopping</Link>
            </li>
            <li>
              <Link href="/category">Real Estates</Link>
            </li>
            <li>More</li>
          </ul>
        </div>
      )}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/images/logo.svg" />
            </a>
          </Link>
        </div>
        <div>
          <div className={styles.search}>
            <div>
              <div className={styles.textField}>
                <button type="button">What</button>
                <input
                  type="text"
                  id="what"
                  placeholder="Ex: food, service, barber, hotel"
                />
              </div>
              <div className={styles.textField}>
                <button type="button">Where</button>
                <input type="text" id="where" placeholder="Your city…" />
              </div>
            </div>
            <button>
              <img src="/images/icons/search.svg" />
              Search
            </button>
          </div>
          <div className={styles.links}>
            <Link href="/category">
              <a>
                <span className={styles.active}>Restaurants</span>
              </a>
            </Link>
            <Link href="/category">
              <a>
                <span>Hotels</span>
              </a>
            </Link>
            <Link href="/category">
              <a>
                <span>Beauty &amp; Spa</span>
              </a>
            </Link>
            <Link href="/category">
              <a>
                <span>Autos</span>
              </a>
            </Link>
            <Link href="/category">
              <a>
                <span>Shopping</span>
              </a>
            </Link>
            <Link href="/category">
              <a>
                <span>Real Estates</span>
              </a>
            </Link>
            <Link href="/category">
              <a>
                <span>
                  More
                  <img src="/images/icons/arrow-down.svg" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Link href="/login">
          <button type="button" className={styles.joinNow}>
            <img src="/images/icons/user-plus.svg" />
            Join Now
          </button>
        </Link>
        <Link href="/listing/create">
          <button type="button" className={styles.addListing}>
            <img src="/images/icons/plus.svg" />
            Add Listing
          </button>
        </Link>
      </div>
      <img
        src="/images/icons/hamburger.svg"
        onClick={() => setOpen(true)}
        className={styles.hamburger}
      />
    </div>
  );
};
