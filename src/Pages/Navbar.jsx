import React from "react";
import style from "./Navbar.module.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
const Navbar = () => {
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
          <img src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" alt="" />

        <Popover>
  
  <div className={style.sBox}>
  <PopoverTrigger>
    <Button className={style.btnx}>Product<i className={style.arrow}></i></Button>
  </PopoverTrigger>
  <Button className={style.btn}>Pricing</Button>
  <Button className={style.btn}>Why Track? <i className={style.arrow}></i></Button>
  <Button className={style.btn}>Careers <i className={style.arrow}></i></Button>
  </div>
  <div className={style.sBox1}>
  <Button className={style.btn}>Book a demo</Button>
  <div className={style.lin}>|</div>
  <Button className={style.btn}>Log in</Button>
  <Button className={style.btn2}>Try for free</Button>
  </div>
  <PopoverContent zIndex={2}>
        <div className={style.B5}>
    <p>i am biman</p>
    </div>
  </PopoverContent>
</Popover>
</div>
     </div>
    </>
  );
};

export default Navbar;
