import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Singup from '../Pages/Singup';

export default class  Header extends Component {
  logout = async () => {
    let response = await fetch("http://localhost:3000/auth/logout",{
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + localStorage.getItem('token'),
                },
             }); 
             if(response.status === 201){
              localStorage.removeItem('token')
              window.location.reload()
             }
             
  }
    render(){

            return(
              <Navbar bg="dark-p3" variant='dark' expand="lg" collapseOnSelect>
                <Navbar.Brand href="#home" >Burgnyik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/" style={{color:"white"}}>Főoldal</Nav.Link>
                    <Nav.Link href="/Menu" style={{color:"white"}} >Menü</Nav.Link>
                    <NavDropdown  title="Továbbiak"  style={{color:"white"}} id="basic-nav-dropdown" >
                      <NavDropdown.Item href="/">Kosár</NavDropdown.Item>
                      <NavDropdown.Item href="/" >Galéria</NavDropdown.Item>
                      <NavDropdown.Divider/>
                    </NavDropdown>
                  </Nav>  
                </Navbar.Collapse>
                
                
                {localStorage.getItem('token') === '' || localStorage.getItem('token') === null? //token ellenőrzés
                <div>
                  <Link className='btn 'style={{marginRight:'7px', color:"white"}} to='/Login'>Bejelentkezés</Link>
                  <Link className='btn ' style={{color:"white"}} to='/Singup'>Regisztrálás</Link> 
                  </div> : <div><Link className='btn 'style={{marginRight:'7px', color:"white"}} to='/Login' onClick={this.logout}>Kijelentkezés</Link></div>
                }

              </Navbar>
              
            );
            
          }
}
           
               
          
            
             
              
            
          
    
    
  

