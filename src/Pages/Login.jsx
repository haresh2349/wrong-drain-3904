import React from 'react'
import styles from "../Styles/Login.module.css";
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmitData = () => {

    }
    const handleDataChange = () => {

    }

  return (
    <div className={styles.cont}>
        <div className={styles.wrap}></div>
        <div className={styles.centered}>
          <h3 className={styles.h2log}>Log in to your account</h3>
          <h3 className={styles.h3log}>Let's get Tracking!</h3>
        </div>
        <div className={styles.main}>
        <form>
            <div className={styles.top}>
            <button type="submit" className={styles.google}>
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
            <br />
            <br />
            <div className={styles.forms}>
            <label>Email </label>
            <br />
            <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleDataChange}
            />{" "}
            <br />
            <label>Password</label>
            <br />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleDataChange}
            />
            </div>
            <div
            style={{
                textAlign: "right",
            }}
            >
            <span className={styles.forgot}>Forgot Password?</span>
            </div>
            <br />
            <div>
            <button
                type="submit"
                onClick={handleSubmitData}
                className={styles.btn2log}
            >
                Log in
            </button>
            </div>
        </form>
        </div>
        <div className={styles.bottom}>
        <p>Don't have an account?</p>
        <Link to="/signup">
            <button className={styles.linkbutton}>Sign up for free</button>
        </Link>
        <br />
        <br />
        <br />
        </div>
    </div>
  )
}

export default Login