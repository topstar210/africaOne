import React from 'react';
import { Header, Footer } from '../../components/layout';
import styles from '../../styles/pages/listing/Create.module.scss';

const CreateListing = () => {
  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.title}>Add your Listing</p>
            <p className={styles.description}>Add details about your listing</p>
          </div>
          <div className={styles.body}>
            <div className={styles.left}>
              <div className={styles.primaryInfo}>
                <div className={styles.header}>
                  primary listing details
                </div>
                <div className={styles.body}>
                  <div className={styles.formControl}>
                    <label><span>Listing Title <i>*</i></span></label>
                    <input type="text" placeholder="Business or Hotel Name" />
                  </div>
                  <div className={styles.formControl}>
                    <label>Tagline</label>
                    <input type="text" placeholder="Tagline Example: A New Africa" />
                  </div>
                  <div className={styles.formControl}>
                    <label>Full Address</label>
                    <input type="text" placeholder="Type your address here" />
                  </div>
                  <div className={styles.formControl}>
                    <label>
                      <span>ADAS Digital Address</span>
                      <span>
                        <span>Don’t have a digital address?</span>
                        <span>&nbsp;Get one here&nbsp;<img src="/images/icons/open-new-blue.svg" /> </span>
                      </span>
                    </label>
                    <input type="text" placeholder="Example: UG-289-765" />
                  </div>
                  <div className={styles.formControl}>
                    <label>Phone</label>
                    <input type="text" placeholder="Example: +256 777 123 456" />
                  </div>
                  <div className={styles.formControl}>
                    <label>Website</label>
                    <input type="text" placeholder="Example: https://www.africaone.com" />
                  </div>
                  <div className={styles.formControl}>
                    <label>About</label>
                    <textarea placeholder="Talk about your business" />
                  </div>
                </div>
              </div>
              <div className={styles.covid19}>
                <p className={styles.title}>COVID-19 UPDATES</p>
                <textarea placeholder="Share helpful information about COVID-19 in line with your business" />
              </div>
              <div className={styles.categoryServices}>
                <div className={styles.header}>category & services</div>
                <div className={styles.body}>
                  <div className={styles.formControl}>
                    <label>Category <i>*</i></label>
                    <select>
                      <option>Choose your business category</option>
                    </select>
                  </div>
                  <div className={styles.formControl}>
                    <label>General</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        Order Delivery
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Order Takeout
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Make a Reservation
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Offering a Deal
                      </label>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label>Parking</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        Street
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Garage
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Private Lot
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Validated
                      </label>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label>Smoking</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        No
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Yes
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Outdoor Area
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Patio Only
                      </label>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label>Music</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        Dj
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Juke Box
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Karaoke
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Live
                      </label>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label>Meat Served</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        Kosher
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Halal
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        No Available
                      </label>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label>Good for Groups</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        Group of 5
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Group of 10
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Group of 15+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.extras}>
                <div className={styles.header}>EXTRAS</div>
                <div className={styles.body}>
                  <div className={styles.formControl}>
                    <label>General</label>
                    <div>
                      <label>
                        <input type="checkbox" name="general" />
                        Accept Credit cards
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Free Parking Available
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Wireless internet
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Accepts Apple Pay
                      </label>
                      <label>
                        <input type="checkbox" name="general" />
                        Accepts Android Pay
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <div className={styles.header}>MEDIA</div>
                <div className={styles.body}>
                  <div className={styles.uploaderOne}>
                    <label>Upload Business Logo</label>
                    <div className={styles.uploader}>
                      <label for="businessLogoOne">
                        <a>Browse File</a>
                        <span>Choose file</span>
                      </label>
                      <input type="file" id="businessLogoOne" />
                    </div>
                  </div>
                  <div className={styles.uploaderTwo}>
                    <label>Upload Business Logo</label>
                    <div className={styles.uploader}>
                      <img src="/images/icons/uploader.svg" />
                      <span>Drop files here or click to upload</span>
                      <label for="businessLogoTwo">Browse Files</label>
                      <input type="file" id="businessLogoTwo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <p className={styles.title}>Title</p>
                <p className={styles.description}>
                  Enter your complete business name for when people who know your business by name and are looking you up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateListing;