import React from "react";
import styles from "../Styles/Signup.module.css";

const Signup = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.signupheading}>
        <img src="https://i.postimg.cc/QxzkyhCG/toggle-icon.png" alt="" />
        <h1 className={styles.heads1top}>
          Sign up for a <i style={{ color: "rgb(229, 124, 216)" }}>free</i>{" "}
          Toggl Track account
        </h1>
        <p className={styles.paras1top}>
          All plans come with a free, 30-day trial of Toggl Track Premium—no
          credit card required.
          <br />
          Upgrade at the end of the trial or continue using Track for free
          forever.
          <br />
          Already have an account?{" "}
          <a
            href="/signup"
            style={{ color: "rgb(229, 124, 216)", paddingLeft: "20px" }}
          >
            Log in here.
          </a>
        </p>
      </div>
      <div className={styles.flexdiv}>
        <div className={styles.main}>
          <div className={styles.top}>
            <button className={styles.google}>
              {" "}
              <img
                className={styles.googleimg}
                src="https://img.icons8.com/color/452/google-logo.png"
                alt="google"
              />
              Signup via Google
            </button>
            <button className={styles.google}>
              {" "}
              <img
                className={styles.googleimg}
                src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png"
                alt="apple"
              />{" "}
              Sign up via Apple
            </button>
          </div>
          <br />
          <br />
          <h3 className={styles.h3inline}>OR</h3>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Signup;
