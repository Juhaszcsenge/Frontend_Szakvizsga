import React, {Component} from "react";
import { Card, Container} from 'react-bootstrap';
import Footer from "../Comopnents/Footer";
import Header from "../Comopnents/Header";
import "bootstrap/dist/css/bootstrap.css";



interface State{
    menuItems: Menu[]
    token: string
    shoppingCart: CartItems[]

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
            menuItems:[],
            token: localStorage.getItem('token') || '',//iniczializálom a tokent
            shoppingCart: []

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
    handleAddToCart = (menuItem: Menu) => {
        const { shoppingCart } = this.state;
        const { food_id } = menuItem;
        const cartItem = shoppingCart.find((item) => item.menuItem.food_id === food_id);
    
        if (cartItem) {
          const updatedShoppingCart = shoppingCart.map((item) =>
            item.menuItem.food_id === food_id ? { ...item, quantity: item.quantity + 1 } : item
          );
          this.setState({ shoppingCart: updatedShoppingCart });
        } else {
          const newCartItem: CartItems = {
            id: Math.random().toString(36).substr(2, 9),
            total: menuItem.food_price,
            quantity: 1,
            menuItem,
          };
          const updatedShoppingCart = [...shoppingCart, newCartItem];
          this.setState({ shoppingCart: updatedShoppingCart });
        }
      };
    
      handleRemoveFromCart = (menuItem: Menu) => {
        const { shoppingCart } = this.state;
        const { food_id } = menuItem;
        const cartItem = shoppingCart.find((item) => item.menuItem.food_id === food_id);
    
        if (cartItem) {
          if (cartItem.quantity === 1) { // ha egy darab van a kosárban, akkor eltávolítjuk a kosárból
            const updatedShoppingCart = shoppingCart.filter((item) => item.menuItem.food_id !== food_id);
            this.setState({ shoppingCart: updatedShoppingCart });
          } else {
            const updatedShoppingCart = shoppingCart.map((item) => // ha több darab van a kosárban, akkor csak a darabszámot csökkentjük
              item.menuItem.food_id === food_id ? { ...item, quantity: item.quantity - 1 } : item
            );
            this.setState({ shoppingCart: updatedShoppingCart });
          }
        }
      };
    

    AddToShoppingCart = async (menuItem: Menu)  =>  { //objektum 
        let data = {
            quantity: 1, /*egyesével növeli a termékeket */
            menuItem: menuItem
        }
        let response = await fetch("http://localhost:3000/Cart",{
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + this.state.token,
                },
                body: JSON.stringify(data),
            });
        console.log(menuItem)
        const updatedShoppingCart = [...this.state.shoppingCart, {
            id: Math.random().toString(36).substr(2, 9),
            total: menuItem.food_price,
            quantity: 1,
            menuItem,
        }];
        this.setState({ shoppingCart: updatedShoppingCart });
    }

    render(){
        return(
            <Container fluid>
                <Header />
             <div className="bg-image">
                <img src="background_menu.avif" alt="" className="cover2">
                </img> 
            </div> 
            <h1 style={{textAlign: "center"}}>Burgereink</h1>
            <div className="conatiner">
                
                <div className="row">
            {this.state.menuItems.map((item, index) => (
                <div className="col-sm-4 d-flex justify-content-center text-center my-3"> {/*Kilenc képet fogunk megjeleníteni, és méretarányosakat keresünk, így működni fog jól,
                vagy a css-el többet baszakszom, viszont így nem lehet akkor ifxen már responzív az oldal. Még ki kell találni honap.  */}
                <> 
                <div>
                <h2>{item.food_name}</h2>
                <img  src={'http://localhost:3000/burgers/' + item.food_image}/>
                <div>
                <p style={{margin:"left"}}>{item.food_description}</p>
                <p>{item.food_price} Ft</p>
                </div>
                
                <button onClick={(event) => this.AddToShoppingCart(item)}>Kosárba</button> 
                <button onClick={(event) => this.handleAddToCart(item)} style={{width:"30px"}}>+</button>
                <button onClick={(event) => this.handleRemoveFromCart(item)} style={{width:"30px"}}>-</button>
                </div>
                </>
                </div>    
            )
            )}
            </div>
            </div>
            
            <Footer />
            </Container> 
        )
    }
}

   
    

   