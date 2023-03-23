import React, {Component} from "react";
import { Container} from 'react-bootstrap';
import Footer from "../Comopnents/Footer";


interface State{
    menuItems: Menu[]

}

interface Menu{
    food_id : number;
    food_name : string;
    food_description : string;
    food_category : string;
    food_price : number;
}

interface MenuResponse{
    menu : Menu[]
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

      

    render(){
        return(
            <Container fluid>
            <div className="imgcontainer">
                <img src="./background2.avif" alt="" className="cover2">
                </img>
            </div>
            <section id="menuitem">
            <h1>
                <span style={{textAlign: "center"}}>Aktuális kedvenceink</span>            
            </h1>
            <div className="burgers">
            {this.state.menuItems.map(item => (
                <p>{item.food_name}</p>
            ))}
            </div>

            </section>
            <Footer />
            </Container>

            
           
        )
    }
}