import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Pricing from "./Pages/Pricing";
import TogglTrackPage from "./Pages/TogglTrackPage/TogglTrackPage";
import MainRoutes from "./Components/MainRoutes";

function App() {
  return (
    <Box className="App">
      <MainRoutes />
    </Box>
  );
}

export default App;
