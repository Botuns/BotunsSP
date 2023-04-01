import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import { Main, Navbar, Strength } from './components';

function App() {
  const nextComponentRef = useRef(null);
  const scrollToNextComponent = () => {
    if (nextComponentRef.current) {
      nextComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Main scrollToNextComponent={scrollToNextComponent} />
      <Strength refProp={nextComponentRef} />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
