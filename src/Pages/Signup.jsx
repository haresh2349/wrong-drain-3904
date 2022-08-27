import React, { useState } from "react";
import styles from "../Styles/Signup.module.css";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
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
        setErrorMsg("Email & Password both Required");
      }else{
        setErrorMsg("")
      }
      setSubmitButtonDisable(true);

      createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((r)=>{
          setSubmitButtonDisable(false);
          const user = r.user
          updateProfile(user, {
            displayName : value.email
          })
          window.alert("You have Registered successfully")
          navigate("/track/login")
      })
      .catch((err)=>{
          setSubmitButtonDisable(false);
          setErrorMsg(err.message)
    
      })
      // console.log(value)
  }

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
        <div className={styles.mainBox}>
          <div className={styles.topBox}>
            <button className={styles.googleBtn}>
              {" "}
              <img
                className={styles.googleImg}
                src="https://img.icons8.com/color/452/google-logo.png"
                alt="google"
              />
              Signup via Google
            </button>
            <button className={styles.googleBtn}>
              {" "}
              <img
                className={styles.googleImg}
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
          <form onSubmit={handleFormSubmit}>
            <div className={styles.formBox}>
              <label>Email </label>
              <br />
              <input
                type="text"
                name="email"
                onChange={(e) =>setValue((prev) => ({...prev, email : e.target.value}))}
                placeholder="Email"
              />
              <p style={{color:"#E87200", textAlign:"left"}}>{errorMsg}</p>
              <br/>
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                onChange={(e) =>setValue((prev) => ({...prev, password : e.target.value}))}
                placeholder="Password"
              />
            </div>
            <p style={{color:"#E87200", textAlign:"left"}}>{errorMsg}</p>
            <br/>
            <div>
              <button type="submit" disabled={submitButtonDisable} className={styles.submitBtn}>
                sign up via email
              </button>
              <p className={styles.textAftersubmit}>
                By signing up, you agree to our terms of service, privacy policy
                and to receiving marketing communication from Toggl Track. You
                can opt out anytime.
              </p>
            </div>
          </form>
        </div>
        <div>
          <img src="https://i.postimg.cc/MZryZZDX/signtext.png" alt="" />
        </div>
      </div>
      <div style={{border:"1px solid black", width:"100%", height:"60px", backgroundColor:"#E57CD8", display:"flex"}}>
         <p style={{textAlign:"left", marginLeft:"60px", marginTop:"15px"}}>© 2022 Toggl. All rights reserved.</p>
         <p style={{textAlign:"right", marginLeft:"1000px", marginTop:"15px"}}>Legal Terms</p>
      </div>
    </div>
  );
};

export default Signup;
