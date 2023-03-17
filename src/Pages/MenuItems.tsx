import React, {Component} from "react";
import { Container } from "react-bootstrap";

export default class Fooldal extends Component{
    render(){
        return(
            <Container fluid>
            <div className="imgcontainer">
                <img src="./Pulled-Pork" alt="" className="cover">
                </img>
            </div>
            </Container>
        )
    }
}