import React from 'react';
import Navbar from './components/navbar';
import "./components/navbar.css";
import Home from './components/home';
import Webstore from './components/webstore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Support from './components/Support';
import Login from './components/login';
import DashBoard from './components/DashBoard'
import CreateBtn from './components/createBtn';
import TemplatePage from './components/templatePage'
import { useEffect } from 'react'
import DND from './components/DND';
import Signup from './components/singup'
import Grapes from './components/grapes';
import Select from './components/Select';
import Template from './templates/template';
// import About from './components/Select';
const App = () => {

  return (
    
    <>
       
      <Router>
     
      
  
        <Routes>
        <Route  path="/create/byDND/:templateName" element={<Grapes/>}/>
        
       
          <Route  path="/" element={<Home/>} />
          <Route  path="/webstore" element={<TemplatePage/>} />
          <Route  path="/support" element={<Support/>} />
          <Route  path="/dashboard" element={<DashBoard/>} />
          <Route  path="/create" element={<CreateBtn/>} />
          <Route  path="/create/byTemplate" element={<Select/>}/>
          <Route  path="/create/byTemplate/template" element={<Template/>}/>
          {/* <Route  path="/create/byDND" element={<Grapes/>}/> */}
          <Route  path="/login/signup" element={<Signup/>}/>
          <Route  path="/login" element={<Login/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
