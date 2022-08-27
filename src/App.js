import "./App.css";
import { Box } from "@chakra-ui/react";
import { MainRoutes } from "./Components/MainRoutes";
import Projects from "./Components/Projects";

function App() {
  return (
    <Box className="App">
      <MainRoutes />
      {/* <Projects /> */}
    </Box>
  );
}

export default App;
