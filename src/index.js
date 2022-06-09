import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Contacto from './pages/Contactenos';
import Servicios from './pages/Servicios';
import Equipo from './pages/Equipo';
import Tips from './pages/Tips';
import Perros from './pages/perros/Perrros';
import Error404 from './pages/error404/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Routes>
          <Route path='' element={<Perros/>} ></Route>
          <Route path='' element={<Perros/>} ></Route>
          <Route path='/Equipo'element={<Equipo/>}></Route>
          <Route path='/Servicios'element={<Servicios/>}></Route>
          <Route path='/Tips'element={<Tips/>}></Route>
          <Route path='/Contacto'element={<Contacto/>}></Route>
          <Route path='*'element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
    
);
