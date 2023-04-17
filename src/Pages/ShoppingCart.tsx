import React, {Component} from "react";
import { Container, Table } from 'react-bootstrap';
import Footer from "../Comopnents/Footer";
import { Link } from "react-router-dom";


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
        let response = await fetch('http://localhost:3000/cart',{
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('token'),
        
        }}) /* lehúzzuk az adatbázisból az adatokat*/
        let data = await response.json() as CartResponse 
        this.setState({
            Cart : data.shoppingCart,
            sumTotal: data.sumTotal
        }) //state értékek megváltoztatása


    }
    componentDidMount(): void { // lefussanak bizonyos függvények mikor betölt az oldal
        this.loadData()
    }


    render(){
        return (
            <Table>
            {this.state.Cart.map((item) => (
            <div key={item.id}>
              <tr>{item.menuItem.food_name}</tr> {/*menük nevét, árát  kiírja, meg a mennyiséget és a teljes összeget is*/}
              <tr>{item.menuItem.food_price} Ft</tr>
              <tr>Mennyiség: {item.quantity}</tr>
              <tr>Mennyiség: {item.total}</tr>
              {/* => ez a LAMBDA függvény  */}
            </div>
            
          ))}
            <thead>
          <tr>
            <th>Ételek</th>
            <th></th>
            </tr>
            
            <tr>
                <th>Darab</th>
            </tr>
            <tr>
                <th>Ár</th>
            </tr>
        </thead>
        <tbody>
        
        <Link className='btn ' to='/Order'>Tovább a fizetéshez</Link>
        </tbody>

      </Table>
        );
    }
}
      