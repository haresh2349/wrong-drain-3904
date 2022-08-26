import "./App.css";
// import { Box } from "@chakra-ui/react";
import Pricing from "./Pages/Pricing";
import TogglTrackPage from "./Pages/TogglTrackPage/TogglTrackPage";
import MainRoutes from "./Components/MainRoutes";
import { Box } from "@chakra-ui/react";
import { MainRoutes } from "./Components/MainRoutes";
function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
