import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import MenuKedvencek from "./MenuKedvencek";
import Contact from "./Contact";
import Footer from "../Comopnents/Footer";
import '../App.css';
import Loading from '../Loading'
import LoadingPage from "../Comopnents/LoadingPage";
import delay from '../Loading';
import Header from "../Comopnents/Header";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from 'react-player';
import Donwload from "./Donwload";
import GoogleMaps from "./GoogleMaps";





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

   await delay(2000)
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
                <div className="video-container">
                <ReactPlayer
                url={process.env.PUBLIC_URL + '/video2.mp4'}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="50%"
                object-fit="cover"
                filter="brightness(60%)"
                style={{ position: 'sticky', top: '0'}}
                />
                </div>
                
                 
          <MenuKedvencek />
          <Donwload/>
          {/* <Contact /> */}
          <GoogleMaps/>
          <Footer />
        </Container> : <LoadingPage/>}</div>)
        
    }
      
    }

