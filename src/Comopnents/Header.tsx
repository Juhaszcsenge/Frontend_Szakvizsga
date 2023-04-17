import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Badge, Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Singup from '../Pages/Singup';
// import { MDBNavbarLink, MDBIcon } from 'mdb-react-ui-kit';
// import {BsCart2} from 'react-icons/bs'
import useContext from 'react';
import { ShoppingCartCanvas } from '../Pages/WebshoppConecting';

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
              <Navbar bg="dark-p3" variant='dark' expand="lg" collapseOnSelect style={{backgroundColor: 'black'}}>
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
                <Navbar.Collapse className='justify-content-end'>
                  <Navbar.Text>
                   <ShoppingCartCanvas />
                    {/* <BsCart2 href='../Pages/Order.tsx' to='/src/Pages/Order.tsx'/>
                    <Badge pill bg="primary" style={{marginLeft: "10px"}}>
                      2
                    </Badge> */}
                    
                    
                  </Navbar.Text>
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
           
               
          
            
             
              
            
          
    
    
  

