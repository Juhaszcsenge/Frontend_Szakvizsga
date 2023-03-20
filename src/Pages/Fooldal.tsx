import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import Service from "./Service";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "../Comopnents/Footer";
import '../App.css';

export default class Fooldal extends Component{
    render(){
        return(
            <Container fluid>
                <div className="imgcontainer">
                    <img src="./perfect.webp" alt="" className="cover">
                    </img>
                </div>
        <Service />
          <Menu />
          <Contact />
          <Footer />
            </Container>
        )
    }
}
