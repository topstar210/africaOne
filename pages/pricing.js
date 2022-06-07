import React from 'react';
import { PriceItem } from '../components/shared'
import { Header, Footer } from '../components/layout';
import styles from '../styles/pages/Pricing.module.scss';

const Pricing = () => {
  const priceItems = [
    {
      name: 'Free',
      avatar: '/images/pages/pricing/membership/1.png',
      duration: '10 days',
      price: 'Free',
      method: 'Per listing',
      recommended: false,
      features: [
        {
          name: 'Duration: 10days',
          status: true
        },
        {
          name: 'Max. Listing : 5',
          status: false
        },
        {
          name: 'Map Display',
          status: true
        },
        {
          name: 'Contact Display',
          status: false
        },
        {
          name: 'Image Gallery',
          status: false
        },
        {
          name: 'Video',
          status: true
        },
        {
          name: 'Business Tagline',
          status: false
        }
      ]
    },
    {
      name: 'Gold',
      avatar: '/images/pages/pricing/membership/2.png',
      duration: '60 days',
      price: '$30',
      method: 'Per listing',
      recommended: true,
      features: [
        {
          name: 'Duration: 10days',
          status: true
        },
        {
          name: 'Max. Listing : 5',
          status: true
        },
        {
          name: 'Map Display',
          status: true
        },
        {
          name: 'Contact Display',
          status: true
        },
        {
          name: 'Image Gallery',
          status: true
        },
        {
          name: 'Video',
          status: false
        },
        {
          name: 'Business Tagline',
          status: false
        }
      ]
    },
    {
      name: 'Platinum',
      avatar: '/images/pages/pricing/membership/3.png',
      duration: '40 days',
      price: '$50',
      method: 'Per listing',
      recommended: false,
      features: [
        {
          name: 'Duration: 10days',
          status: false
        },
        {
          name: 'Max. Listing : 5',
          status: false
        },
        {
          name: 'Map Display',
          status: false
        },
        {
          name: 'Contact Display',
          status: true
        },
        {
          name: 'Image Gallery',
          status: true
        },
        {
          name: 'Video',
          status: true
        },
        {
          name: 'Business Tagline',
          status: true
        }
      ]
    }
  ];


  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.items}>
          {
            priceItems.map((item, index) => {
              return <PriceItem key={index} item={item} />
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pricing;