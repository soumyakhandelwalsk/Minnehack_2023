import "./App.css";
import UserContext from "./context/UserContext";

import Home from "./pages/Home";
import Government from "./pages/Government";
import Community from "./pages/Community";
import Proposal from "./pages/Propose";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Victories from "./pages/Victories";
import Vote_info from "./pages/Vote_info";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

/* chakra UI stuff */
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/government" element={<Government />} />
          <Route path="/community" element={<Community />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/victories" element={<Victories />} />
          <Route path="/VoteInfo/:id" element={<Vote_info />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
