import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ----------------components--------------
import NavBar from './common/navBar/navBar';
import Footer from './common/footer/footer';
// ----------------pages--------------
import Home from './pages/home';
import AboutUs from './pages/aboutUs';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<AboutUs/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
