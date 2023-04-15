import React, { useState, useContext } from 'react';
import { Badge, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart2 } from 'react-icons/bs';

 export function ShoppingCartCanvas({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  

  return (
    <>
      <Button variant='outline-primary' onClick={handleShow}>
      <BsCart2 href='../Pages/Order.tsx' to='/src/Pages/Order.tsx'/>
                    <Badge pill bg="primary" style={{marginLeft: "10px"}}>
                      2
                    </Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end' style={{backgroundColor: "black"}}>
        <Offcanvas.Header closeButton>
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
     
    </>
  );
}


