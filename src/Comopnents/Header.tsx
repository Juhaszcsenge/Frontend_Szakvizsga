import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class  Header extends Component {
    render(){
        return (
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
              <Navbar.Brand href="#home">Burgnyik</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Főoldal</Nav.Link>
                  <Nav.Link href="#link">Menü</Nav.Link>
                  <NavDropdown title="Továbbiak" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Kosár</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Galéria</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Kapcsolat</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <Link className='btn tbn-success grow'style={{marginRight:'7px'}} to='/login'>Bejelenkezés</Link>
              <Link className='btn btn-success grow' to='/register'>Regisztrálás</Link>
            </Navbar>
          );
    }
  
}