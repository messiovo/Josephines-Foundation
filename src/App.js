import React from "react";
import {Routes, Route} from 'react-router-dom/index';
import {Navbar, Footer} from './component';
import {Homepage} from './page';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path='/' element={<Homepage />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
