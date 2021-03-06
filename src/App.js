import React from "react";
import {Routes, Route} from 'react-router-dom/index';
import {Navbar, Footer} from './component';
import {Homepage, Mission, Track, Contact, Donate} from './page';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/mission' element={<Mission />} />
       <Route path='/track' element={<Track />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/donate' element={<Donate />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
