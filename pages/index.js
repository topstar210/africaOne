import React from "react";
import Link from "next/link";
import { Footer } from "../components/layout";
import { PopularBusiness } from "../components/shared";
import styles from "../styles/pages/Index.module.scss";

const Index = () => {
  const popularBusinesses = [
    {
      name: "2 Friends Guest House",
      point: 4.5,
      user: "/images/pages/home/user.png",
      avatar: "/images/pages/home/businesses/1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua.",
    },
    {
      name: "1000 Shades Of Green",
      point: 4.5,
      user: "/images/pages/home/user.png",
      avatar: "/images/pages/home/businesses/2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua.",
    },
    {
      name: "SDV Transami (U) Ltd",
      point: 4.5,
      user: "/images/pages/home/user.png",
      avatar: "/images/pages/home/businesses/3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua.",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bg}>
            <img src="/images/pages/home/banner.png" />
            <div className={styles.cover} />
          </div>
          <div className={styles.main}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <img src="/images/logo.svg" />
                  </a>
                </Link>
              </div>
              <div className={styles.menu}>
                <ul>
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
                </ul>
                <button>
                  <Link href="/listing/create">
                    <a>
                      <img src="/images/icons/plus.svg" />
                      Add Listing
                    </a>
                  </Link>
                </button>
              </div>
              <img
                src="/images/icons/hamburger.svg"
                className={styles.hamburger}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.title}>Explore Kampala</p>
              <p className={styles.description}>
                Let’s uncover the best places to eat, drink and shop nearest to
                you
              </p>
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
            </div>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.mainContent}>
            <div className={styles.menus}>
              <div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src="/images/pages/home/icons/restaurants.svg" />
                  </div>
                  <span>Restaurants</span>
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src="/images/pages/home/icons/hotels.svg" />
                  </div>
                  <span>Hotels</span>
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src="/images/pages/home/icons/beauty.svg" />
                  </div>
                  <span>Beauty & Spa</span>
                </div>
              </div>
              <div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src="/images/pages/home/icons/autos.svg" />
                  </div>
                  <span>Autos</span>
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src="/images/pages/home/icons/shopping.svg" />
                  </div>
                  <span>Shopping</span>
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src="/images/pages/home/icons/real-estate.svg" />
                  </div>
                  <span>Real Estate</span>
                </div>
              </div>
              <div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img
                      src="/images/pages/home/icons/more.svg"
                      className={styles.more}
                    />
                    <img
                      src="/images/pages/home/icons/plus.svg"
                      className={styles.plus}
                    />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
            <div className={styles.popularBusiness}>
              <p className={styles.title}>Popular Businesses Nearby</p>
              <div className={styles.content}>
                {popularBusinesses.map((business, index) => {
                  return <PopularBusiness data={business} key={index} />;
                })}
              </div>
            </div>
            <div className={styles.review}>
              <div className={styles.left}>
                <div className={styles.header}>Review of the day</div>
                <div className={styles.body}>
                  <div>
                    <div className={styles.avatar}>
                      <img src="/images/pages/home/user.png" />
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.name}>Yusuf Kayiwa</p>
                      <p className={styles.about}>
                        <span>
                          <img src="/images/icons/people.svg" />
                          205
                        </span>
                        <span>
                          <img src="/images/icons/star.svg" />
                          572
                        </span>
                      </p>
                      <p className={styles.user}>
                        Wrote a review for <span>Cafe Javas Kampala</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className={styles.star}>
                        <img src="/images/icons/star.svg" />
                        <img src="/images/icons/star.svg" />
                        <img src="/images/icons/star.svg" />
                        <img src="/images/icons/star.svg" />
                        <img src="/images/icons/star-o.svg" />
                      </div>
                      <span>
                        4.5 out of 5 stars
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug 22,
                        2020 2:36pm
                      </span>
                    </div>
                    <div>
                      <div className={styles.left}>
                        <img src="/images/pages/home/4.png" />
                      </div>
                      <div className={styles.right}>
                        <p className={styles.description}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur...
                        </p>
                        <span className={styles.readmore}>Read more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  <button>
                    <Link href="/business">Click to visit business</Link>
                  </button>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.header}>Recent list</div>
                <div className={styles.body}>
                  <div className={styles.item}>
                    <div className={styles.left}>
                      <img src="/images/pages/home/5.png" />
                    </div>
                    <div className={styles.right}>
                      <p className={styles.title}>
                        Consetetur sadipscing elitr, sed dia…
                      </p>
                      <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam
                      </p>
                      <p className={styles.user}>
                        By <span>Samantha D.</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.left}>
                      <img src="/images/pages/home/6.png" />
                    </div>
                    <div className={styles.right}>
                      <p className={styles.title}>
                        Consetetur sadipscing elitr, sed dia…
                      </p>
                      <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam
                      </p>
                      <p className={styles.user}>
                        By <span>Samantha D.</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.left}>
                      <img src="/images/pages/home/7.png" />
                    </div>
                    <div className={styles.right}>
                      <p className={styles.title}>
                        Consetetur sadipscing elitr, sed dia…
                      </p>
                      <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam
                      </p>
                      <p className={styles.user}>
                        By <span>Samantha D.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  <button>Browse more lists</button>
                </div>
              </div>
            </div>
            <div className={styles.recentActivity}>
              <p className={styles.title}>Recent Activity</p>
              <div className={styles.content}>
                <div>
                  <div className={styles.typeOne}>
                    <div className={styles.header}>
                      <div className={styles.avatar}>
                        <img src="/images/pages/home/user.png" />
                      </div>
                      <div className={styles.detail}>
                        <p>Fiona B</p>
                        <p>Added 2 photos</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.title}>Caption/Title</p>
                      <div className={styles.items}>
                        <div className={styles.item}>
                          <img src="/images/pages/home/8.png" />
                          <span>
                            <img src="/images/icons/thumb-up.svg" />
                            346
                          </span>
                        </div>
                        <div className={styles.item}>
                          <img src="/images/pages/home/9.png" />
                          <span>
                            <img src="/images/icons/thumb-up.svg" />
                            234
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.typeOne}>
                    <div className={styles.header}>
                      <div className={styles.avatar}>
                        <img src="/images/pages/home/user.png" />
                      </div>
                      <div className={styles.detail}>
                        <p>Sulam D</p>
                        <p>Added 1 photos</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.title}>Caption/Title</p>
                      <div className={styles.items}>
                        <div className={styles.item}>
                          <img src="/images/pages/home/10.png" />
                          <span>
                            <img src="/images/icons/thumb-up.svg" />
                            346
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.typeTwo}>
                    <div className={styles.header}>
                      <div className={styles.avatar}>
                        <img src="/images/pages/home/user.png" />
                      </div>
                      <div className={styles.detail}>
                        <p>Niniola S</p>
                        <p>Wrote a review</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <img src="/images/pages/home/11.png" />
                      <div className={styles.detail}>
                        <p className={styles.name}>Name Of Place</p>
                        <p className={styles.star}>
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star-o.svg" />
                          <span>4.5 out of 5 stars</span>
                        </p>
                        <p className={styles.description}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren.
                        </p>
                      </div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.left}>
                        <img src="/images/icons/interesting.svg" />
                        <img src="/images/icons/lol.svg" />
                        <img src="/images/icons/love.svg" />
                      </div>
                      <div className={styles.right}>
                        <img src="/images/icons/bookmark-gray.svg" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.typeTwo}>
                    <div className={styles.header}>
                      <div className={styles.avatar}>
                        <img src="/images/pages/home/user.png" />
                      </div>
                      <div className={styles.detail}>
                        <p>Derrick K</p>
                        <p>Wrote a review</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <img src="/images/pages/home/12.png" />
                      <div className={styles.detail}>
                        <p className={styles.name}>Name Of Place</p>
                        <p className={styles.star}>
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star.svg" />
                          <img src="/images/icons/star-o.svg" />
                          <span>4.5 out of 5 stars</span>
                        </p>
                        <p className={styles.description}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren.
                        </p>
                      </div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.left}>
                        <img src="/images/icons/interesting.svg" />
                        <img src="/images/icons/lol.svg" />
                        <img src="/images/icons/love.svg" />
                      </div>
                      <div className={styles.right}>
                        <img src="/images/icons/bookmark-gray.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.typeOne}>
                    <div className={styles.header}>
                      <div className={styles.avatar}>
                        <img src="/images/pages/home/user.png" />
                      </div>
                      <div className={styles.detail}>
                        <p>Sulam D</p>
                        <p>Added 1 photos</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.title}>Caption/Title</p>
                      <div className={styles.items}>
                        <div className={styles.item}>
                          <img src="/images/pages/home/13.png" />
                          <span>
                            <img src="/images/icons/thumb-up.svg" />
                            346
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.typeOne}>
                    <div className={styles.header}>
                      <div className={styles.avatar}>
                        <img src="/images/pages/home/user.png" />
                      </div>
                      <div className={styles.detail}>
                        <p>Fiona B</p>
                        <p>Added 2 photos</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.title}>Caption/Title</p>
                      <div className={styles.items}>
                        <div className={styles.item}>
                          <img src="/images/pages/home/14.png" />
                          <span>
                            <img src="/images/icons/thumb-up.svg" />
                            346
                          </span>
                        </div>
                        <div className={styles.item}>
                          <img src="/images/pages/home/15.png" />
                          <span>
                            <img src="/images/icons/thumb-up.svg" />
                            234
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button>
                <img src="/images/icons/arrow-down-blue.svg" />
                Show more activity in Kampala
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
