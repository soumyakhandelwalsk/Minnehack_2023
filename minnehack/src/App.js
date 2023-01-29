import './App.css';
import UserContext from "./context/UserContext";

import Home from './pages/Home';
import Government from './pages/Government';
import Community from './pages/Community';
import Proposal from './pages/Propose';
import { BrowserRouter, Route, Switch, Redirect, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Government' element={<Government />} />
        <Route path='/Community' element={<Community />} />
        <Route path='/Proposal' element={<Proposal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
