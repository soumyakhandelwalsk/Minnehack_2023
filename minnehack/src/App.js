import "./App.css";
import UserContext from "./context/UserContext";

import Home from "./pages/Home";
import Government from "./pages/Government";
import Community from "./pages/Community";
import Proposal from "./pages/Propose";
import Victories from "./pages/Victories";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Routes,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Government" element={<Government />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Proposal" element={<Proposal />} />
          <Route path="/Victories" element={<Victories />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
