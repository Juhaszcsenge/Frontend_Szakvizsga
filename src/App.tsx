import React from 'react';
import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Header from './Comopnents/Header';
import Footer from './Comopnents/Footer';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import LoginHome from './Pages/LoginHome';



  class App extends React.Component{

    render() {
    return  <div>
      <>
      <Header />
      <main>
        <Container >
          <h1>valami</h1> 
        </Container>
      </main>
      <Footer />
      </>
      <Routes>
      <Route path='/' element={<LoginHome></LoginHome>}></Route>
    <Route path='/register' element={<Singup></Singup>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/*' element={<p style={{fontSize:'50px'}}>Ez az oldal nem létezik, biztos hogy jól írtad be az url-t? :P</p>}></Route>
      </Routes>
    </div>

  }
}

export default App;
