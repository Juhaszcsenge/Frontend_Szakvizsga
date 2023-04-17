import React, { useState, useContext, useEffect } from 'react';
import { Badge, Container, Stack, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart2 } from 'react-icons/bs';
import MenuItems from './MenuItems';
import Footer from '../Comopnents/Footer';

interface Props {
  menuItems: Menu[];
}

interface Menu {
  food_id: number;
  food_name: string;
  food_description: string;
  food_category: string;
  food_price: number;
  food_image: string;
}

export function ShoppingCartCanvas(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
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
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Ételek</th>
                <th>Darab</th>
                <th>Ár</th>
              </tr>
            </thead>
            <tbody>
              {props.menuItems.map((menuItem) => (
                <tr key={menuItem.food_id}>
                  <td>{menuItem.food_id}</td>
                  <td>{menuItem.food_name}</td>
                  <td>1</td>
                  <td>{menuItem.food_price} Ft</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function ShoppingCart() {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  // adatok lekérése az adatbázisból
  const loadData = async () => {
    let response = await fetch('http://localhost:3000/cart');
    let data = await response.json() as { menu: Menu[] };
    setMenuItems(data.menu);
  };

  // adatok lekérése a komponens betöltésekor
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Stack gap={3}>
        <ShoppingCartCanvas menuItems={menuItems} />
        <Footer />
      </Stack>
    </Container>
  );
}
