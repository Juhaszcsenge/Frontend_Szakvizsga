import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Singup from '../Pages/Singup';

export default class  Header extends Component {
    render(){
        return (
            <Navbar bg="dark-p3" variant='dark' expand="lg" collapseOnSelect>
              <Navbar.Brand href="#home" style={{color:"rgb(228, 56, 228)"}}>Burgnyik</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home" style={{color:"rgb(228, 56, 228)"}}>Főoldal</Nav.Link>
                  <Nav.Link href="#link" style={{color:"rgb(228, 56, 228)"}}>Menü</Nav.Link>
                  <NavDropdown style={{color:"rgb(228, 56, 228)"}}  title="Továbbiak" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1" style={{color:"rgb(228, 56, 228)"}}>Kosár</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={{color:"rgb(228, 56, 228)"}}>Galéria</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={{color:"rgb(228, 56, 228)"}}>Kapcsolat</NavDropdown.Item>
                    <NavDropdown.Divider   style={{color:"rgb(228, 56, 228)"}}/>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <Link className='btn 'style={{marginRight:'7px', color:'rgb(228, 56, 228)'}} to='/Login'>Bejelentkezés</Link>
              <Link className='btn ' style={{color:'rgb(228, 56, 228)'}}  to='/register'>Regisztrálás</Link>

            </Navbar>
            
          );
    }
  

}