import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Slider from "react-slick";
import { Header, Footer } from "../components/layout";
import { RecommendedReview } from "../components/shared";
import styles from "../styles/pages/Business.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Business = () => {
  const [openedModal, setOpenedModal] = useState(false);
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "310px", zIndex: 1000 }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "280px", zIndex: 1000 }}
        onClick={onClick}
      />
    );
  };

  useEffect(() => {
    if (openedModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openedModal]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          variableWidth: true,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const mapInfo = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const recommendedReviews = [
    {
      name: "Yusuf Kayiwa",
      avatar: "/images/pages/business/user.png",
      target: "Cafe Javas Kampala",
      viewCount: 205,
      favoriteCount: 572,
      point: 4.5,
      publishedDateTime: "Aug 22, 2020  2:36pm",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur",
      interestingCount: 123,
      lolCount: 56,
      loveCount: 893,
    },
    {
      name: "Yusuf Kayiwa",
      avatar: "/images/pages/business/user.png",
      target: "Cafe Javas Kampala",
      viewCount: 205,
      favoriteCount: 572,
      point: 4.5,
      publishedDateTime: "Aug 22, 2020  2:36pm",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur",
      interestingCount: 123,
      lolCount: 56,
      loveCount: 893,
    },
  ];
  return (
    <>
      <Header />
      {openedModal && (
        <div className={styles.modal}>
          <div className={styles.bg} />
          <div className={styles.main}>
            <div className={styles.header}>
              <span className={styles.title}>Share Business</span>
              <img
                className={styles.close}
                onClick={() => setOpenedModal(false)}
                src="/images/icons/close-gray.svg"
              />
            </div>
            <div className={styles.body}>
              <div className={styles.socialButtons}>
                <button className={styles.facebook}>
                  <img src="/images/icons/facebook-white.svg" />
                </button>
                <button className={styles.whatsapp}>
                  <img src="/images/icons/whatsapp-white.svg" />
                </button>
                <button className={styles.twitter}>
                  <img src="/images/icons/twitter-white.svg" />
                </button>
              </div>
              <div className={styles.address}>
                <button>
                  <img src="/images/icons/copy.svg" />
                </button>
                <p>https://www.africaone.com/biz/cafe-javas-kampala</p>
              </div>
              <p className={styles.or}>Or</p>
              <div className={styles.to}>
                <input type="text" placeholder="To" />
              </div>
              <div className={styles.note}>
                <label>Username/Email</label>
                <textarea placeholder="Additional Note (Optional)" />
              </div>
              <button>Share</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.slider}>
            <Slider {...settings}>
              <div>
                <img src="/images/pages/business/1.png" />
              </div>
              <div>
                <img src="/images/pages/business/2.png" />
              </div>
              <div>
                <img src="/images/pages/business/3.png" />
              </div>
            </Slider>
          </div>
          <div className={styles.bannerContainer}>
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.left}>
                  <img src="/images/pages/business/avatar.png" />
                </div>
                <div className={styles.right}>
                  <p className={styles.name}>Cafe Javas Kampala</p>
                  <div className={styles.star}>
                    <img src="/images/icons/star.svg" />
                    <img src="/images/icons/star.svg" />
                    <img src="/images/icons/star.svg" />
                    <img src="/images/icons/star.svg" />
                    <img src="/images/icons/star-o.svg" />
                    <span>14</span>
                  </div>
                  <div className={styles.services}>
                    <ul>
                      <li>Breakfast</li>
                      <li>Lunch</li>
                      <li>Supper</li>
                    </ul>
                  </div>
                  <p className={styles.claimed}>
                    <img src="/images/icons/tick-circle.svg" />
                    Claimed Business
                  </p>
                  <p className={styles.time}>
                    <span>Open </span> 10:00 AM - 8:30 PM
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <button>See Photos</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.mainContent}>
            <div className={styles.firstDiv}>
              <div className={styles.left}>
                <div className={styles.toolbar}>
                  <button>
                    <img src="/images/icons/star-white.svg" />
                    Write A Review
                  </button>
                  <button>
                    <img src="/images/icons/camera-white.svg" />
                    Add Photo
                  </button>
                  <button onClick={() => setOpenedModal(true)}>
                    <img src="/images/icons/upload.svg" />
                    Share
                  </button>
                </div>
                <div className={styles.about}>
                  <p className={styles.title}>About</p>
                  <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className={styles.covid19}>
                  <p className={styles.title}>COVID-19 Updates</p>
                  <p className={styles.description}>
                    Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className={styles.services}>
                  <p className={styles.title}>Services</p>
                  <div className={styles.content}>
                    <ul>
                      <li>
                        <img src="/images/icons/tick.svg" />
                        Delivery
                      </li>
                      <li>
                        <img src="/images/icons/tick.svg" />
                        Takeout
                      </li>
                      <li>
                        <img src="/images/icons/tick.svg" />
                        Outdoor Seating
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.paymentMethods}>
                  <div className={styles.item}>
                    <img src="/images/icons/creditcard.svg" />
                    <span>Accepts Credit cards</span>
                  </div>
                  <div className={styles.item}>
                    <img src="/images/icons/car.svg" />
                    <span>Free Parking Available</span>
                  </div>
                  <div className={styles.item}>
                    <img src="/images/icons/wifi.svg" />
                    <span>Wireless internet</span>
                  </div>
                  <div className={styles.item}>
                    <img src="/images/icons/applepay.svg" />
                    <span>Accepts Apple Pay</span>
                  </div>
                </div>
                <div className={styles.askCommunity}>
                  <div className={styles.header}>
                    <span className={styles.title}>Ask the Community</span>
                    <button>
                      <span>Ask a question</span>
                      <img src="/images/icons/plus-gray.svg" />
                    </button>
                  </div>
                  <div className={styles.body}>
                    <p>
                      AfricaOne users haven’t asked any questions yet about{" "}
                      <b>Cafe Javas.</b>
                    </p>
                  </div>
                </div>
                </div>
              <div className={styles.right}>
              <div className={styles.detailLocation}>
                <div className={styles.map}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={mapInfo.center}
                    defaultZoom={mapInfo.zoom}
                  >
                    <AnyReactComponent lat={59.955413} lng={30.337844} />
                  </GoogleMapReact>
                </div>
                <div className={styles.detail}>
                  <div>
                    <div className={styles.left}>cafejavas.co.ug</div>
                    <div className={styles.right}>
                      <img src="/images/icons/open-new.svg" />{" "}
                    </div>
                  </div>
                  <div>
                    <div className={styles.left}>+256 800 123 456</div>
                    <div className={styles.right}>
                      <img src="/images/icons/phone-o.svg" />{" "}
                    </div>
                  </div>
                  <div>
                    <div className={styles.left}>
                      <span>Our Location</span>
                      <span className={styles.opposite}>
                        Opposite post office, Kampala Road, Kampala
                      </span>
                    </div>
                    <div className={styles.right}>
                      <img src="/images/icons/marker-o.svg" />{" "}
                    </div>
                  </div>
                  <div>
                    <div className={styles.left}>
                      <span>Our Digital Address</span>
                      <span className={styles.address}>UG-234-987</span>
                    </div>
                    <div className={styles.right}>
                      <span>Get directions</span>
                      <img src="/images/icons/direction.svg" />
                    </div>
                  </div>
                  <div>
                    <div className={styles.left}>Message This Business</div>
                    <div className={styles.right}>
                      <img src="/images/icons/chat-o.svg" />{" "}
                    </div>
                  </div>
                  <div>
                    <img src="/images/icons/facebook-text.svg" />
                    <img src="/images/icons/twitter.svg" />
                    <img src="/images/icons/instagram.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.callOrder}>
                <p>
                  <img src="/images/icons/order-car.svg" />
                  <span>Call To Order Take Out!</span>
                </p>
                <button>Call for Details</button>
              </div>
            </div>
            </div>
            <div className={styles.reviews}>
            <div className={styles.recommendedReviews}>
                  <div className={styles.title}>Recommended Reviews</div>
                  <div className={styles.content}>
                    {recommendedReviews.map((review, index) => {
                      return <RecommendedReview key={index} data={review} />;
                    })}
                  </div>
                </div>
                <div className={styles.reviewForm}>
                  <div className={styles.header}>
                    <span className={styles.title}>
                      <img src="/images/icons/star-border.svg" />
                      <span>Rate us and Write a Review </span>
                    </span>
                    <div className={styles.icons}>
                      <img src="/images/icons/arrow-up-circle.svg" />
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.header}>
                      <div className={styles.left}>
                        <span>Your Rating for this listing</span>
                        <div>
                          <img src="/images/icons/star-border-lg.svg" />
                          <img src="/images/icons/star-border-lg.svg" />
                          <img src="/images/icons/star-border-lg.svg" />
                          <img src="/images/icons/star-border-lg.svg" />
                          <img src="/images/icons/star-border-lg.svg" />
                        </div>
                      </div>
                      <div className={styles.right}>
                        <button>Select Images</button>
                        <button>Browse</button>
                      </div>
                    </div>
                    <div className={styles.form}>
                      <div className={styles.formControl}>
                        <label>
                          Email <span>*</span>
                        </label>
                        <input type="email" placeholder="you@website.com" />
                      </div>
                      <div className={styles.formControl}>
                        <label>
                          Title <span>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: It was an awesome experience"
                        />
                      </div>
                      <div className={styles.formControl}>
                        <label>
                          Email <span>*</span>
                        </label>
                        <textarea placeholder="Tip: A great review covers food, service and ambiance. Got recommendations for your favourite dish and drinks, Or something someone else should try? Include that too!"></textarea>
                      </div>
                    </div>
                    <p>
                      Your review is recommended to be at least 140 characters
                      long
                    </p>
                    <button className={styles.submitReview}>Submit Review</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Business;
