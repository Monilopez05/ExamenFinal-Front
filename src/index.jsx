import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Favs from './Routes/Favs.jsx'
import Detail from './Routes/Detail.jsx'
import App from './App.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
       <Routes>
             <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/favorito" element={<Favs/>}/>
        <Route path="/dentist/:id" element={<Detail/>}/>
        </Route>
       </Routes>    
      </BrowserRouter>
       
);




