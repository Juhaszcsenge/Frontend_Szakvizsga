import { Component} from "react";
import hamburger from "../Pages/hamburger.gif"

/**A loadingscreen középre igazítása egy divben. Hogy az oldal közepén jelenjen meg.  */
export default class LoadingPage extends Component {
    render(){
        return  <div style={{textAlign:'center'}}>

        
        <img src={hamburger} style={{backgroundColor:"#0c1022", height:"800px"}} alt="Loading..."/>
        </div>
    }
}