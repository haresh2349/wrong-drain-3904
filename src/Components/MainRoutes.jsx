import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BigTeam from "../why-track/Forbigteams/BigTeam";
import Freelancers from "../why-track/Forfreelancers/Freelancer";
import SmallTeam from "../why-track/Forsmallteam/SmallTeam";
import Pricing from "../Pages/Pricing";
import Signup from "../Pages/Signup";
import TogglTrackPage from "../Pages/TogglTrackPage/TogglTrackPage";
import { auth } from "../Firebase";

export const MainRoutes = () => {
  const [userMail, setUserEmail] = useState("")

  useEffect(() => {
      auth.onAuthStateChanged((user)=>{
        if(user) {
          setUserEmail(user.displayName)
        }else{
          setUserEmail("");
        }
      })
  },[])
  return (
    <Routes>
      <Route path="/track/signup" element={<Signup />} />
      <Route path="/track/freelance-time-tracking" element={<Freelancers />} />
      <Route path="/track/time-tracking-small-teams" element={<SmallTeam />} />
      <Route path="/track/time-tracking-large-teams" element={<BigTeam />} />
      <Route path="/track/pricing" element={<Pricing />} />
      <Route path="/track/timer" element={<TogglTrackPage />} />
    </Routes>
  );
};
