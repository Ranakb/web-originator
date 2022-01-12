import React from 'react';
import Navbar from './components/navbar';
import "./components/navbar.css";
import Home from './components/home';
import Webstore from './components/webstore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Support from './components/Support';
import Login from './login';
import CreateBtn from './components/createBtn';
import TemplatePage from './components/templatePage'
import DND from './components/DND';

const App = () => {
  return (
    <>
       
      <Router>
      
           <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/webstore" element={<Webstore/>} />
          <Route  path="/support" element={<Support/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/create" element={<CreateBtn/>} />
          <Route  path="/create/byTemplate" element={<TemplatePage/>}/>
          <Route  path="/create/byDND" element={<DND/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
