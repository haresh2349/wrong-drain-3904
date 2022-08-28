import React from "react";
import style from "./Navbar.module.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.B1}>
        <div className={style.B2}>
          <p>Back to Toggl Global</p>
          <p>Products</p>
          <p>Blog</p>
          <p>Our mission</p>
          <p>Working at Toggl</p>
        </div>
        <div className={style.B3}>
          <img
            src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
            alt=""
          />


          <Popover>
            <div className={style.sBox}>
              <PopoverTrigger>
                <Button
                  style={{ backgroundColor: "#2c1338" }}
                  className={style.btnx}
                >
                  Product<i className={style.arrow}></i>
                </Button>
              </PopoverTrigger>
              <Button
                style={{ backgroundColor: "#2c1338" }}
                className={style.btn}
                onClick={() => {
                  navigate("/track/pricing");
                }}
              >
                Pricing
              </Button>
              <Button
                style={{ backgroundColor: "#2c1338" }}
                className={style.btn}
                onClick={() => {
                  navigate("/track/freelance-time-tracking");
                }}
              >
                Why Track? <i className={style.arrow}></i>
              </Button>
              <Button
                style={{ backgroundColor: "#2c1338" }}
                className={style.btn}
              >
                Careers <i className={style.arrow}></i>
              </Button>
            </div>
            <div className={style.sBox1}>
              <Button
                style={{ backgroundColor: "#2c1338" }}
                className={style.btn}
              >
                Book a demo
              </Button>
              <div className={style.lin}>|</div>
              <Button
                style={{ backgroundColor: "#2c1338" }}
                className={style.btn}

               
                onClick={() => {
                  navigate("/track/login");
                }}
              >
                Log in
              </Button>
              <Button
                style={{ backgroundColor: "#eed052", borderRadius: "25px" }}
                className={style.btn2}

               
                onClick={() => {
                  navigate("/track/timer");
                }}
              >
                Try for free
              </Button>
            </div>
           
          </Popover>
        </div>
      </div>

    </>
  );
};

export default Navbar;
