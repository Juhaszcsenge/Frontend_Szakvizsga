import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import Service from "./Service";
import MenuKedvencek from "./MenuKedvencek";
import Contact from "./Contact";
import Footer from "../Comopnents/Footer";
import Responsive from "../Pages/Responsive"
import '../App.css';
import Loading from '../Loading'
import LoadingPage from "../Comopnents/LoadingPage";


interface State{
    load:boolean;
    
  }

export default class Fooldal extends Component<{},State>{

    constructor(props:{}){
        super(props);
    
        this.state={
            load: true

    render(){
        return(
            <Container fluid>
                <div className="imgcontainer">
                    <img src="./perfect.webp" alt="" className="cover">
                    </img>
                </div>
                {this.state.load ? <LoadingPage/>}
              <LoadingPage/>
            <Service />
          <MenuKedvencek />
          <Contact />
          <Footer />
        </Container>
        )
    }
}
