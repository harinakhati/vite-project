import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Project from './components/Project'
import Certification from './components/Certification'
import Eductaion from './components/Education'
import Contact from './components/Contact'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <div >
    <BrowserRouter>
    <nav className={CSS.bar}>
      <Link to ="/">Home</Link>
      <Link to="/Project">Project</Link>
      <Link to="/Education">Education</Link>
      <Link to="/Certification">Certification</Link>
      <Link to ='/Contact'>Contact</Link>
    </nav>
   <Routes>
      <Route path="/"exact Component={Home}></Route>
      <Route path="/Project" Component={Project}></Route>
      <Route path="/Education" Component={Eductaion}></Route>
      <Route path="/Certification" Component={Certification}></Route>
      <Route path="/Contact" Component={Contact}></Route>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
