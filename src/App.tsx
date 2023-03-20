import React from 'react';
import {Link } from 'react-router-dom';
import Header from './Comopnents/Header';
import { Route,Routes } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Fooldal from './Pages/Fooldal';
import Carousel from './Comopnents/Carousel'
import Service from './Pages/Service';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import MenuItems from './Pages/MenuItems';






  class App extends React.Component{

    render() {
    return  <div>
      <>
      
      <Header />
      <Routes>
             <Route path='/' element={<Fooldal></Fooldal>}></Route>
              <Route path='/Singup' element={<Singup></Singup>}></Route>
             
              

              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/Menu' element={<MenuItems></MenuItems>}></Route>

          </Routes> 
      </>
      
    </div>
  }
}

export default App;
