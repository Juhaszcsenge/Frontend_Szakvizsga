import React from 'react';
import logo from './logo.svg';
import {Link } from 'react-router-dom';
import Header from './Comopnents/Header';
import Footer from './Comopnents/Footer';
import { Route,Routes } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import LoginHome from './Pages/LoginHome';
import Fooldal from './Pages/Fooldal';
import Images from './Images/sajtburger.jpg'
import Carousel from './Comopnents/Carousel'
import Service from './Pages/Service'
import Menu from './Pages/Menu'





  class App extends React.Component{

    render() {
    return  <div>
      <>
      
      <Header />

        
     

          
          <Routes>
              <Route path='/register' element={<Singup/>}></Route>
              <Route path='/Login' element={<Login/>}></Route>
          </Routes>  
          <Container />
          <Carousel  /> 
          <Service />
          <Menu />
                
               
       
      
  
      <Fooldal />
     
      
      <Footer />
      </>
      
    </div>
  }
}

export default App;
