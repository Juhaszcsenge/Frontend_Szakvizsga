import React, { useState, useContext, useEffect } from 'react';
import { Badge, Container, Stack, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart2 } from 'react-icons/bs';
import MenuItems from './MenuItems';
import Footer from '../Comopnents/Footer';
import ShoppingCart from './ShoppingCart';

let itemsCounts = 0;
/** TypeScript interfészek, amelyek meghatározzák a kódban lévő objektumok alakját
 * és meghatározza a menü itemek tulajdonságait
 */
interface Menu {
  food_id: number;
  food_name: string;
  food_description: string;
  food_category: string;
  food_price: number;
  food_image: string;
}
/**  leírja a szerver válaszát, amikor egy ügyfél lekéri a bevásárlókosarát */
interface CartResponse{
  shoppingCart : CartItems[]
  sumTotal: string;
}
/** Leírja a bevásárlókosárban lévő tétel tulajdonságait */
interface CartItems{
  id: string;
  total: number;
  quantity: number;
  menuItem: Menu;
}
/**Canvas a jobb oldalt található slidertért felel, ami tárolja is az adatokat, és megjeleníti mindig mikor rányomunk a bevásárlókosár ikonra. */
export function ShoppingCartCanvas({...props}) {
  const [show, setShow] = useState(false);
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

/** Az await megvárja, hogy az adatok visszatérjenek a szerverről, mielőtt folytatná a kód futtatását,
 * a fetch metódust használja az adatok lekérését a szerverről,
 *  az adatkéréshez a localStorage objektum token kulcsát adja hozzá az Authorization fejléchez, hogy azonosítani tudja a felhasználót,
 * miután az adatok visszatérnek a szerverről, a függvény átalakítja azokat json formátumba, majd a data változóban tárolja őket,
 * Az itemsCounts változóban eltároljuk a kosárban lévő tételek számát, majd a console.log metódust használjuk az adatok kiírásához a konzolban, hogy ellenőrizni tudjuk, 
 * hogy a függvényünk hiba nélkül végig fut-e. 
*/
  const loadData = async () => {
    let response = await fetch('http://localhost:3000/cart',{
      headers:{
        'Authorization':'Bearer '+ localStorage.getItem('token'),
    }});
    let data = await response.json() as CartResponse;
    itemsCounts = data.shoppingCart.length
    console.log(data)
  };
/**Az useEffect hook egy olyan React hook, amely segít az oldal frissítési ciklusainak kezelésében. 
 * A hook az oldal betöltődésekor egyszer fut le a loadData függvény hívásával. 
 * Az üres tömb azt jelzi, hogy a hook csak az oldal betöltődésekor fut le, és nem hajtódik végre újra a kódban történő bármilyen változás esetén. */
  useEffect(() => {
    loadData();
  }, []);

  

  return (
    <>
      <>
     <Button variant="outline-primary" onClick={handleShow}>
        <BsCart2 href="../Pages/MenuItems.tsx" to="../Pages/MenuItems.tsx" />
        <Badge pill bg="primary" style={{ marginLeft: '10px' }}>
          {itemsCounts}
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