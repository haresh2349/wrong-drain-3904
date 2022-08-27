import React, { useState } from 'react'
import styles from "../Styles/Login.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';

const Login = () => {

  const navigate = useNavigate();
  const [value, setValue] = useState({
       email : "",
       password : ""
  })
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false)

  const handleFormSubmit = (e) => {
      e.preventDefault()
      if(!value.email || !value.password){
        setErrorMsg("Email & paaword Required");
        // return;
      }
      else if(!value.email){
        window.alert("Email Required");
      }
      else if(!value.password){
        window.alert("Password Required");
      }
      else{
        setErrorMsg("")
      }
      setSubmitButtonDisable(true);

      signInWithEmailAndPassword(auth, value.email, value.password)
      .then((r)=>{
        setSubmitButtonDisable(false);
        window.alert("Login Successfully")
        navigate("/track/timer")

      }).catch((err)=>{
        setSubmitButtonDisable(false);
        // setErrorMsg(err.message)
        // console.log(err);
      })
  }

  return (
    <div className={styles.cont}>
        <div className={styles.wrap}></div>
        <div className={styles.centered}>
          <h3 className={styles.h2log}>Log in to your account</h3>
          <h3 className={styles.h3log}>Let's get Tracking!</h3>
        </div>
        <div className={styles.main}>
        <form onSubmit={handleFormSubmit}>
            <div className={styles.top}>
            <button type="submit" className={styles.google}>
                {" "}
                <img
                className={styles.googleimg}
                src="https://img.icons8.com/color/452/google-logo.png"
                alt="google"
                />
                Login via Google
            </button>
            <button className={styles.google}>
                {" "}
                <img
                className={styles.googleimg}
                src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png"
                alt="apple"
                />{" "}
                Login via Apple
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
                onChange={(e) =>setValue((prev) => ({...prev, email : e.target.value}))}
            />{" "}
            <br />
            <label>Password</label>
            <br />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>setValue((prev) => ({...prev, password : e.target.value}))}
            />
            </div>
            <p style={{color:"#E87200", textAlign:"left"}}>{errorMsg}</p>
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
                disabled={submitButtonDisable}
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