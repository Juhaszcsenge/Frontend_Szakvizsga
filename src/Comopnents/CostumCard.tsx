import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
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
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
     
    </>
  );
}


