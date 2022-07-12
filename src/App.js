import React from "react";
import {Routes, Route} from 'react-router-dom/index';
import {Navbar, Footer} from './component';
import {Homepage, Mission} from './page';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/mission' element={<Mission />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
