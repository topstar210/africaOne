import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Header, Footer } from '../components/layout';
import styles from '../styles/pages/Category.module.scss';
import { CategoryItem } from '../components/shared/CategoryItem';

const Category = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const mapInfo = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  const categories = [
    {
      name: 'Cafe Javas Kampala',
      point: 14,
      types: ['Breakfast', 'Lunch', 'Supper'],
      tags: ['Delivery', 'Takeout', 'Outdoor Seating'],
      phone: '+256 800 123 456',
      location: 'Plot 7 Entebbe Road',
      avatar: '/images/pages/category/1.png',
      description: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      name: 'Luwombo Restaurant',
      point: 14,
      types: ['Breakfast', 'Lunch', 'Supper'],
      tags: ['Delivery', 'Takeout', 'Outdoor Seating'],
      phone: '+256 800 123 456',
      location: 'Plot 7 Entebbe Road',
      avatar: '/images/pages/category/2.png',
      description: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      name: 'Izumi Restaurant',
      point: 14,
      types: ['Breakfast', 'Lunch', 'Supper'],
      tags: ['Delivery', 'Takeout', 'Outdoor Seating'],
      phone: '+256 800 123 456',
      location: 'Plot 7 Entebbe Road',
      avatar: '/images/pages/category/3.png',
      description: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      name: 'The Food Hub',
      point: 14,
      types: ['Breakfast', 'Lunch', 'Supper'],
      tags: ['Delivery', 'Takeout', 'Outdoor Seating'],
      phone: '+256 800 123 456',
      location: 'Plot 7 Entebbe Road',
      avatar: '/images/pages/category/4.png',
      description: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      name: 'KFC Restaurant',
      point: 14,
      types: ['Breakfast', 'Lunch', 'Supper'],
      tags: ['Delivery', 'Takeout', 'Outdoor Seating'],
      phone: '+256 800 123 456',
      location: 'Plot 7 Entebbe Road',
      avatar: '/images/pages/category/5.png',
      description: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      name: 'Abdul Jabari Restaurant',
      point: 14,
      types: ['Breakfast', 'Lunch', 'Supper'],
      tags: ['Delivery', 'Takeout', 'Outdoor Seating'],
      phone: '+256 800 123 456',
      location: 'Plot 7 Entebbe Road',
      avatar: '/images/pages/category/6.png',
      description: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.title}>Restaurants</p>
          <p className={styles.filter}>
            <img src="/images/icons/filter.svg" />
            Filters
          </p>
          <div className={styles.btnGroup}>
            <div className={styles.left}>
              <button>
                <img src="/images/icons/marker.svg" />
                <span>Near Me</span>
              </button>
              <button>
                <img src="/images/icons/money.svg" />
                <span>Price</span>
              </button>
              <button>
                <img src="/images/icons/sort.svg" />
                <span>Sort</span>
              </button>
            </div>
            <div className={styles.right}>
              <button>Clear Filters</button>
            </div>
          </div>
          <div className={styles.categories}>
            {
              categories.map((category, index) => {
                return <CategoryItem key={index} category={category} />
              })
            }
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.mapContainer}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={mapInfo.center}
              defaultZoom={mapInfo.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Category;