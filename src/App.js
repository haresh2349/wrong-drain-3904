import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import BigTeam from './why-track/Forbigteams/BigTeam';
import  Freelancers from './why-track/Forfreelancers/Freelancer'
import SmallTeam from './why-track/Forsmallteam/SmallTeam';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/track/time-tracking-large-teams" element={ <BigTeam/> } />

        <Route path="/track/freelance-time-tracking" element={ <Freelancers/> } />

        <Route path="/track/time-tracking-small-teams" element={ <SmallTeam/> } />

      </Routes>
    </div>
  );
}

export default App;
