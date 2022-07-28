
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './style/global.css';
import Home from './pages/home/Home';
import Consulta from './pages/consulta/Consulta';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
      
   <Route path="/home" element={<Home/>} />
   <Route path='/consulta' element={<Consulta/>}/>
      
      
  </Routes>
</BrowserRouter>
  
);

