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
import MenuKedvencek from './Pages/MenuKedvencek';
import Contact from './Pages/Contact';
import MenuItems from './Pages/MenuItems';
import Order from './Pages/Order';


  interface State{
    logedin: boolean
  }



  class App extends React.Component< {}, State>{

    constructor(props: {}) {
      super(props)
      this.state = { 
        logedin: false
      }
  }


    


     componentDidMount(): void { //mikor betöltődik az összes component akkor fut le 
        
     }
    

    render() {
    return  <div>
      <>
      
      {/* <Header />  */}
      <Routes>
             <Route path='/' element={<Fooldal></Fooldal>}></Route>
              <Route path='/Singup' element={<Singup></Singup>}></Route>
             
              

              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/Menu' element={<MenuItems></MenuItems>}></Route>
              <Route path='/Order' element={<Order></Order>}></Route>
              <Route path='/Fooldal' element={<Fooldal></Fooldal>}></Route>

          </Routes> 
      </>

      
      
    </div>
  }
}

export default App;
