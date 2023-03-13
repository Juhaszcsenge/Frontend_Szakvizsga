import React, {Component} from "react";
import { Container } from 'react-bootstrap';

export default class Fooldal extends Component{
    render(){
        return(
            <Container fluid>
                <div className="imgc">
                    <img src="./fire2.avif" alt="" style={{width:"2000px", height:"650px"}}>
                    </img>
                </div>
            </Container>
        )
    }
}
