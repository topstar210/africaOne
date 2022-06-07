import Link from 'next/link';
import React from 'react';
import styles from '../../styles/layouts/Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/">About Africa One</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
      </div>

      <div className={styles.down}>
        <div>
          <ul>
            <li>Copyright 2020 AfricaOne</li>
            <li>Plot 14, 16 Semawata Rd, Kampala</li>
            <li>Tel 0704 927915</li>
          </ul>
        </div>
        <div>
          Copyright © 2021 Africa One. All Rights Reserved
        </div>
      </div>
    </div>
  )
}