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
    AddToDatabase = async (cartItem : CartItems)  =>  {
       console.log( cartItem.menuItem.food_price)
        let data = {
            quantity : cartItem.quantity,
            menuItem : cartItem.menuItem
        }
        if(cartItem.quantity <= 0) {
            let response = await fetch("http://localhost:3000/cart/" + cartItem.id,{
                method: 'DELETE',
                headers: {
                'Authorization': "Bearer " + localStorage.getItem('token'),
                },
             }); 
             this.loadData()
             return
        }
        let adat = await JSON.stringify(data)
        let response = await fetch('http://localhost:3000/cart',{
          method: 'PATCH',
          headers:{
            "Content-Type": "application/json",
            'Authorization':'Bearer '+ localStorage.getItem('token'),
            
        },
         body : adat});
         console.log(JSON.stringify(data))
         if(response.ok) {
            this.loadData()
         }
        }
        
    componentDidMount(): void { // lefussanak bizonyos függvények mikor betölt az oldal
        this.loadData()
    }

    increasequantity = (item : CartItems) => {
        item.quantity += 1
        this.AddToDatabase(item)

    }
    decreasequantity = async (item : CartItems) => {
        item.quantity -= 1

        this.AddToDatabase(item)
    }

    render(){
        return (
            <Table>
            {this.state.Cart.map((item) => (
            <div key={item.id}>
            <thead>
            <tr>
                <th>Ételek</th>
                <th>Darab</th><br/>
                <th>Ár</th>
            </tr>
            </thead>
                 <tbody style={{border:"1px solid white"}}>
                 <td>
                     <tr> <img src={'http://localhost:3000/burgers/' + item.menuItem.food_image}  className="rounded-3" style={{ width: "150px" }}
                                alt="Shopping item"></img></tr> 
                    <tr>{item.menuItem.food_name}</tr> 
                    <button onClick={(event) => this.increasequantity(item)}>+</button>
                    <button onClick={(event) => this.decreasequantity(item)}>-</button>
                </td>
                <td>
                    <tr>{item.quantity}</tr>
                </td>
                <td>
                <tr>{item.menuItem.food_price} Ft</tr>
                </td>
                 </tbody>
             {/*menük nevét, árát  kiírja, meg a mennyiséget és a teljes összeget is*/}
             
             
              <tr>Mennyiség: {item.total}</tr>
              {/* => ez a LAMBDA függvény  */}
            </div>
            
          ))}
           
       
           
        
        <Link className='btn ' to='/Order' style={{backgroundColor:" rgb(63, 0, 113)", color:"white"}}>Tovább a fizetéshez</Link>


      </Table>
        );
    }
}
      