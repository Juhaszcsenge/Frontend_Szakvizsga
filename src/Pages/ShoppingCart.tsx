import React, {Component} from "react";
import { Container} from 'react-bootstrap';
import Footer from "../Comopnents/Footer";


interface State{
    Cart: CartItems[]
    sumTotal: string;

}

interface Menu{
    food_id : number;
    food_name : string;
    food_description : string;
    food_category : string;
    food_price : number;
    food_image: string;
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
            Cart:[],
            sumTotal: ''
        }
    }
    
    
    loadData = async () => {
        let response = await fetch('http://localhost:3000/menu/') /* lehúzzuk az adatbázisból az adatokat*/
        let data = await response.json() as CartResponse 
        this.setState({
            Cart : data.shoppingCart,
            sumTotal: data.sumTotal
        }) //state értékek megváltoztatása

    }
    componentDidMount(): void { // lefussanak bizonyos függvényewk mikor betölt az oldal
        this.loadData()
    }
    

    // const incrementItemQuantity = (id: number) => {
    //     const updatedItems = this.state.Cart.map((item) =>
    //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //     );
    //     setItems(updatedItems);
    //   };
    
    //   const decrementItemQuantity = (id: number) => {
    //     const updatedItems = items.map((item) =>
    //       item.id === id && item.quantity > 1
    //         ? { ...item, quantity: item.quantity - 1 }
    //         : item
    //     );
    //     setItems(updatedItems);
    //   };
    render(){
        return (
            <div>
              {this.state.Cart.map((item) => (
                <div key={item.id}>
                  <h2>{item.menuItem.food_name}</h2>
                  <p>{item.menuItem.food_price} Ft</p>
                  <p>Mennyiség: {item.quantity}</p>
                  <p>Mennyiség: {item.total}</p>
                  {/* <button onClick={() => incrementItemQuantity(item.id)}>+</button> */}
                  {/* <button onClick={() => decrementItemQuantity(item.id)}>-</button> */}
                  {/* => ez a LAMBDA függvény  */}
                </div>
              ))}
            </div>
        );
    }
}
      