import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Signup from "./Pages/Signup";
// import Pricing from "./Pages/Pricing";

function App() {
  return (
    <Box className="App">
      {/* <Pricing /> */}
      <Signup/>
    </Box>
  );
}

export default App;
