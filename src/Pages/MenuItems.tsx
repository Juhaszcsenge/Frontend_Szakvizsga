import React, {Component} from "react";
import { Container} from 'react-bootstrap';
import Footer from "../Comopnents/Footer";
import Header from "../Comopnents/Header";


interface State{
    menuItems: Menu[]
    token: string

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
            token: localStorage.getItem('token') || '' //iniczializálom a tokent

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

    AddToShoppingCart = async (menuItem: Menu)  =>  { //objektum 
        let data = {
            quantity: 1,
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

    }

      

    render(){
        return(
            <Container fluid>
                <Header />
            <div className="imgcontainer">
                <img src="background_menu.avif" alt="" className="cover2">
                </img>
            </div>
            <section id="menuitem">
                <div className="h1title">
            <h1>
                <span style={{textAlign: "center"}}>Menü</span>            
            </h1>
            </div>
            <div className="burgers">
            {this.state.menuItems.map(item => (
                <><h2>{item.food_name}</h2> 
                <img src={'http://localhost:3000/burgers/'+ item.food_image}></img>
                <p>{item.food_description}</p>
                <button onClick={(event) => this.AddToShoppingCart(item)}>Buy now</button>
                {/* <p>He Printing and Typesetting the industry. Lorem Ipsum has</p> */}
                </>
            )
            )}
            </div>
            

            </section>
            <Footer />
            </Container>

            
           
        )
    }
}