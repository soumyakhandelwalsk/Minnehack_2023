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
      <Home />
      <Routes>
        <Route path='/home' component={<Home />} />
        <Route path='/Government' component={<Government />} />
        <Route path='/Community' component={<Community />} />
        <Route path='/Proposal' component={<Proposal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
