import Link from "next/link";
import React, { useState } from "react";
import { Footer } from "../components/layout";
import styles from "../styles/pages/Login.module.scss";

const Login = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <img src="/images/logo.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.form}>
          {!flag ? (
            <div className={styles.login}>
              <p className={styles.title}>Login to AfricaOne</p>
              <p className={styles.subTitle}>
                New to AfricaOne?
                <span onClick={() => setFlag(true)}>Sign up</span>
              </p>
              <p className={styles.description}>
                By logging in, you agree to Africaones’s{" "}
                <span>
                  Terms of
                  <br /> Service
                </span>{" "}
                and <span>Privacy Policy.</span>
              </p>
              <div className={styles.username}>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.password}>
                <button>
                  <img src="/images/icons/eye-slash.svg" />
                </button>
                <input type="password" placeholder="Password" />
              </div>
              <p className={styles.recovery}>Password Recovery</p>
              <Link href="/dashboard">
                <button type="button" className={styles.signin}>
                  Sign In
                </button>
              </Link>
              <div className={styles.social}>
                <span>Or continue with</span>
                <div>
                  <button type="button">
                    <img src="/images/icons/google.svg" />
                  </button>
                  <button type="button">
                    <img src="/images/icons/apple.svg" />
                  </button>
                  <button type="button">
                    <img src="/images/icons/facebook.svg" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.signup}>
              <p className={styles.title}>Sign up for AfricanOne</p>
              <p className={styles.description}>
                By continuing, you agree to Africaones’s{" "}
                <span>
                  Terms of
                  <br /> Service
                </span>{" "}
                and <span>Privacy Policy.</span>
              </p>
              <div style={{ display: "flex" }}>
                <div
                  className={styles.username}
                  style={{ marginRight: "15px" }}
                >
                  <input type="text" placeholder="First Name" />
                </div>
                <div className={styles.username}>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className={styles.username}>
                <input type="text" placeholder="Email" />
              </div>
              <div className={styles.password}>
                <button>
                  <img src="/images/icons/eye-slash.svg" />
                </button>
                <input type="password" placeholder="Password" />
              </div>
              <div className={styles.birthday}>
                <p>
                  Birthday<span>Optional</span>
                </p>
                <div>
                  <input type="number" placeholder="Month" />
                  <input type="number" placeholder="Day" />
                  <input type="number" placeholder="Year" />
                </div>
              </div>
              <button type="button" className={styles.signin}>
                Sign up
              </button>
              <div className={styles.social}>
                <span>Or continue with</span>
                <div>
                  <button type="button">
                    <img src="/images/icons/google.svg" />
                  </button>
                  <button type="button">
                    <img src="/images/icons/apple.svg" />
                  </button>
                  <button type="button">
                    <img src="/images/icons/facebook.svg" />
                  </button>
                </div>
                <p>
                  Already have an account{" "}
                  <a onClick={() => setFlag(false)}>Sign in</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
