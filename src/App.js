import React from "react";
import {Routes, Route} from 'react-router-dom/index';
import {Navbar} from './component';
import {Homepage} from './page';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path='/' element={<Homepage />} />
    </Routes>
    Hello world
    </>
  );
}

export default App;
