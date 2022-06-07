import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { TextField, Textarea } from '../components/shared'
import { Header, Footer } from '../components/layout';
import styles from '../styles/pages/Contacts.module.scss';

const Contacts = () => {

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const mapInfo = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  const handleChange = (name, value) => {
    setContactInfo({ ...contactInfo, [name]: value });
  }

  const handleSend = () => {
    console.log('Contact Informaction: ', contactInfo);
  }

  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
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
          <div className={styles.right}>
            <div className={styles.address}>
              <p className={styles.title}>Address</p>
              <div className={styles.locationInfo}>
                <p>
                  <img src="/images/icons/marker-gray.svg" />
                  <span>Plot 14, 16 Semawata Rd, Kampala</span>
                </p>
                <p>
                  <img src="/images/icons/phone-gray.svg" />
                  <span>P+256 414 123 456</span>
                </p>
                <p>
                  <img src="/images/icons/email-gray.svg" />
                  <span>info@africaone.com</span>
                </p>
              </div>
            </div>
            <div className={styles.form}>
              <p className={styles.title}>Write to us</p>
              <div>
                <div>
                  <div>
                    <TextField
                      placeholder="Name"
                      name="name"
                      value={contactInfo.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      placeholder="Email"
                      name="email"
                      value={contactInfo.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <TextField
                    placeholder="Subject"
                    name="subject"
                    value={contactInfo.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    name="message"
                    value={contactInfo.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="button" onClick={() => handleSend()}>Send</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contacts;