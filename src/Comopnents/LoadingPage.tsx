import { Component} from "react";
import hamburger from "../Pages/hamburger.gif"

export default class LoadingPage extends Component {
    render(){
        return <div style={{textAlign: 'center'}}>
        
        <img src={hamburger} style={{backgroundColor:"#0c1022", alignItems:"center"}} alt="Loading..."/>
        </div>
    }
}