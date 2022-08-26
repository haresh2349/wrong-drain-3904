import logo from "./logo.svg";
import "./App.css";
// import { Box } from "@chakra-ui/react";
import Pricing from "./Pages/Pricing";
import TogglTrackPage from "./Pages/TogglTrackPage/TogglTrackPage";
import MainRoutes from "./Components/MainRoutes";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      {/* <MainRoutes /> */}
     <Navbar/>
    </div>
  );
}

export default App;
