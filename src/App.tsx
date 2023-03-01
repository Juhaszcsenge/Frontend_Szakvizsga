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
    </div>

  }
}

export default App;
