import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import AboutMe from './components/pages/aboutMe';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Skills from './components/pages/skills';
import { Route, Routes } from 'react-router-dom'
import Bottom from './components/bottom';

function App() {

  return (
    <><div className='backgroundImage'></div><div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Bottom />
    </div></>
  );
}

export default App;
