import React from 'react';
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
import Fooldal from './Pages/Fooldal';
import Images from './Images/sajtburger.jpg'
import Carousel from './Comopnents/Carousel'
import Service from './Pages/Service';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';





  class App extends React.Component{

    render() {
    return  <div>
      <>
      
      <Header />

          <Container />
          <Fooldal />
          {/* <Carousel  />  */}
          <Service />
          <Menu />
          <Contact />
         
                
          <Routes>
              <Route path='/Singup' element={<Singup></Singup>}></Route>
              <Route path='/Home' element={<Fooldal></Fooldal>}></Route>


              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/Menu' element={<Menu></Menu>}></Route>

          </Routes>   
       
      
  
      
     
      
      <Footer />
      </>
      
    </div>
  }
}

export default App;
