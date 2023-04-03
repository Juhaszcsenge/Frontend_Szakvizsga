import React, {Component} from "react";
import { Button, Container, Stack} from 'react-bootstrap';
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
    food_image: string;
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

    // render(){
        // return(
    //     <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
    //   {/* <img */}
    //     {/* src={item.imgUrl} */}
    //     {/* style={{ width: "125px", height: "75px", objectFit: "cover" }} */}
    //   {/* /> */}
    //   <div className="me-auto">
    //     <div>
    //       {item.name}{" "}
    //       {quantity > 1 && (
    //         <span className="text-muted" style={{ fontSize: ".65rem" }}>
    //           x{quantity}
    //         </span>
    //       )}
    //     </div>
    //     <div className="text-muted" style={{ fontSize: ".75rem" }}>
    //       {formatCurrency(item.price)}
    //     </div>
    //   </div>
    //   <Button
    //     variant="outline-danger"
    //     size="sm"
    //     onClick={() => removeFromCart(item.id)}
    //   >
    //     &times;
    //   </Button>
    // </Stack>
        // )
    // }
}