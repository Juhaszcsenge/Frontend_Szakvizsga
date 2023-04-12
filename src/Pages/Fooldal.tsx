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
import delay from '../Loading';
import Header from "../Comopnents/Header";


interface State{
    load : boolean
}

export default class Fooldal extends Component<{}, State>{
    constructor(props: {}) {
        super(props)
        this.state = { 
            load: false
        }
    }

loading = async () =>{

   await delay(3000)
    this.setState({
        load:true
    })

}

componentDidMount(){
    
    this.loading()
}

    render(){
        return(<div> { this.state.load=== true ? 
            <Container fluid>
                <Header />
                <div className="imgcontainer">
                    <img src="./perfect.webp" alt="" className="cover">
                    </img>
                </div>

             
            <Service />
          <MenuKedvencek />
          <Contact />
          <Footer />
        </Container> : <LoadingPage/>}</div>)
        
    }
      
    }

