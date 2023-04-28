import React, {Component} from "react";
import { Button, Container, Stack} from 'react-bootstrap';
import Footer from "../Comopnents/Footer";

/**

- State: 
  - A State típus egy interfész, amely a Menu típusok tömbjét tartalmazza. 
  A Menu típus az étterem menüpontjait írja le.
- Menu: 
  - Az étterem menüpontjainak típusa, amely az ételek adatait tartalmazza, 
  például az azonosítót, a nevet, a leírást, a kategóriát, az árat és az ételek képét.
- MenuResponse:
  - Az interfész típus, amely a szerver által küldött menüpontokat tartalmazza.
- CartResponse: 
  - Az interfész típus, amely a kosárba helyezett elemeket és az összesített árat tartalmazza.
- CartItems: 
  - Az interfész típus, amely a kosárba helyezett elemeket írja le, 
  beleértve az azonosítót, a teljes összeget, a mennyiséget és a menüpontot.

Az osztálykomponens három függvényt tartalmaz:

- Konstruktor:
  - A konstruktor az osztálykomponens inicializálásához szükséges. 
  A kezdeti állapotot a state objektumban hozzuk létre, és ebben az esetben az üres menüpontok tömbjét állítjuk be.
- loadData függvény:
  - Az aszinkron függvény loadData az adatok lekérése a szerverről. 
  A fetch metódust használja az adatok letöltéséhez, majd JSON formátumba alakítja a választ. 
  A letöltött adatokat a state-be állítjuk be a setState metódussal.
- componentDidMount függvény:
  - Az életciklus metódus componentDidMount a komponens betöltése után fut le. 
  Ebben az esetben meghívjuk a loadData függvényt.

A MenuItems komponens importálja a react-bootstrap Button, Container és Stack komponenseit, 
amelyek az alapvető felhasználói felületet biztosítják az alkalmazásban. 
Az osztálykomponens importálja a Footer komponenst is, amely az alkalmazás láblécét tartalmazza.

A MenuItems komponens segít a felhasználóknak az ételek listájának megjelenítésében, a kosárba helyezés funkcióval. 
A fejlesztőnek át kell adnia a MenuItems komponenst a szükséges adatokkal az ételekről, majd ezt a komponenst fel kell */
interface State{
    menuItems: Menu[]

}

interface Menu{
    food_id : number;
    food_name : string;
    food_description : string;
    food_category : string;
    food_price : number;
    food_image: string;
}

interface MenuResponse{
    menu : Menu[]
}

interface CartResponse{
    shoppingCart : CartItems[]
    sumTotal: string;
}

interface CartItems{
    id: string;
    total: number;
    quantity: number;
    menuItem: Menu;
}


export default class MenuItems extends Component< {}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            menuItems:[]
        }
    }
    
    
    loadData = async () => {
        let response = await fetch('http://localhost:3000/menu/') /* lehúzzuk az adatbázisból az adatokat*/
        let data = await response.json() as MenuResponse 
        this.setState({
            menuItems : data.menu
        }) //state értékek megváltoztatása

    }
    componentDidMount(): void { // lefussanak bizonyos függvényewk mikor betölt az oldal
        this.loadData()
    }

   
  
}
  