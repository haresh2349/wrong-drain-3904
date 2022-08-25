import React from "react";
import { Routes, Route } from "react-router-dom";
import BigTeam from '../why-track/Forbigteams/BigTeam';
import  Freelancers from '../why-track/Forfreelancers/Freelancer'
import SmallTeam from '../why-track/Forsmallteam/SmallTeam';
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Navbar/> */}
      {/* <Route><Route path='/' element={<Home/>}/></Route> */}

      <Routes>
        <Route path="/track/freelance-time-tracking" element={<Freelancers />} />        
        <Route path="/track/time-tracking-small-teams" element={<SmallTeam />} />
        <Route path="/track/time-tracking-large-teams" element={<BigTeam />} />
      </Routes>

      {/* <Footer/> */}
    </Routes>
  );
};

export default MainRoutes;
