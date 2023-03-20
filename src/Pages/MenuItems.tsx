import React, {Component} from "react";
import { Container} from 'react-bootstrap';
import Footer from "../Comopnents/Footer";

export default class MenuItems extends Component{
    render(){
        return(
            <Container fluid>
            <div className="imgcontainer">
                <img src="./background2.avif" alt="" className="cover2">
                </img>
            </div>
            <Footer />
            </Container>

            
           
        )
    }
}