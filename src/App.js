import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Pricing from "./Pages/Pricing";
import TogglTrackPage from "./Pages/TogglTrackPage/TogglTrackPage";

function App() {
  return (
    <Box className="App">
      {/* <Pricing /> */}
      <TogglTrackPage/>
    </Box>
  );
}

export default App;
