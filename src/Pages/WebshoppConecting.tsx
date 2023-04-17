import React, { useState, useContext, useEffect } from 'react';
import { Badge, Container, Stack, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart2 } from 'react-icons/bs';
import MenuItems from './MenuItems';
import Footer from '../Comopnents/Footer';
import ShoppingCart from './ShoppingCart';


interface Menu {
  food_id: number;
  food_name: string;
  food_description: string;
  food_category: string;
  food_price: number;
  food_image: string;
}

export function ShoppingCartCanvas({...props}) {
  const [show, setShow] = useState(false);
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadData = async () => {
    let response = await fetch('http://localhost:3000/cart',{
      headers:{
        'Authorization':'Bearer '+ localStorage.getItem('token'),
    }});
    let data = await response.json() as { menu: Menu[] };
    setMenuItems(data.menu);
    console.log(data)
  };

  useEffect(() => {
    loadData();
  }, []);

  

  return (
    <>
      <>
     <Button variant="outline-primary" onClick={handleShow}>
        <BsCart2 href="../Pages/MenuItems.tsx" to="../Pages/MenuItems.tsx" />
        <Badge pill bg="primary" style={{ marginLeft: '10px' }}>
          2
        </Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: 'black' }}>
        <Offcanvas.Header closeButton style={{color:"white"}}>
          <Offcanvas.Title>Kosár</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ShoppingCart/>    
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </>
  );
}

