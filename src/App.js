import React from "react";
import {Routes, Route} from 'react-router-dom/index';
import {Navbar, Footer} from './component';
import {Homepage, Mission, Track} from './page';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/mission' element={<Mission />} />
       <Route path='/track' element={<Track />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
