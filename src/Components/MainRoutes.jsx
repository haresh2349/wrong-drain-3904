import React from "react";
import { Routes, Route } from "react-router-dom";
import BigTeam from '../why-track/Forbigteams/BigTeam';
import  Freelancers from '../why-track/Forfreelancers/Freelancer'
import SmallTeam from '../why-track/Forsmallteam/SmallTeam';
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Navbar/> */}
<<<<<<< HEAD
      <Route>{/* <Route path='/' element={<Home/>}/> */}</Route>
=======
      <Routes>
        <Route path="/track/freelance-time-tracking" element={<Freelancers />} />        
        <Route path="/track/time-tracking-small-teams" element={<SmallTeam />} />
        <Route path="/track/time-tracking-large-teams" element={<BigTeam />} />
      </Routes>
>>>>>>> 085bdaacfdfb382f5e3f3e8318b693db99afa7e6
      {/* <Footer/> */}
    </Routes>
  );
};

export default MainRoutes;
