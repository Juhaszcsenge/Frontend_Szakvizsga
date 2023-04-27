import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {ResponseMess} from "../Response";
import Header from "../Comopnents/Header";

/** TypeScript interfészek, amelyek meghatározzák a kódban lévő objektumok alakját*/
interface State {
  message: string[];
  singEmail: string;
  singFullname: string;
  singPass: string;
  singRePass: string;
}

/**A constructor 4db kulcsot tartalmaz és egy tömböt */
class Singup extends Component <{}, State> {
  constructor(props: {}){
    super(props);

    this.state = {
      message: [],
      singEmail: '',
      singFullname: '',
      singPass: '',
      singRePass: ''
    }
  }
  /**Egy függvény ami a hibaüzenetekre van megírva. Ha a felhasználó rosszul ad meg egy adatot akkor azt hibaüzenet formájában jelezzük neki. */
    handleRegister = async () => {
       if (this.state.singFullname.trim() === ''){
        this.setState({message: ['Kérjük adja meg a teljes nevét!'] })
        return;
       }
       else if(this.state.singEmail === ''){
        this.setState({message: ['Kérjük adja meg az email címét']})
        return;
       }
       else if(this.state.singPass === ''){
        this.setState({message: ['Kötelező jelszót megadni']})
        return;
       }
       else if(this.state.singRePass === ''){
        this.setState({message: ['A két jelszó  nem egyezik']})
        return;
       }
       /**Console.log szintén arra szolgál itt, hogy ellenőrizzük, hogy a függvény hiba mentesen végig fut-e.  */
        console.log("mukszik?")
        const data ={
          "fullName": this.state.singFullname,
          "email": this.state.singEmail,
          "password": this.state.singPass,
          "repassword": this.state.singRePass
        };
/**Az adatokat elküldjük a szervernek, és az általa visszaadott Promise objektumot visszaadja, amelyet a await kulcsszóval várakoztatunk, amíg a válasz meg nem érkezik. 
 * A metódus második részében adja át az HTTP kérés részleteit.
 *  A method kulcsszó a kérés módszerét állítja be, amely itt "POST", azaz az adatokak a kérést postolja és így jeleníti meg a szervernek.
 *  A headers objektum az  adatküldési formátumot határozza meg (JSON). 
 * Az body kulcsszó az adatokat adja meg, amelyeket a  kérés testében küldünk el.
*/
        let response = await fetch("http://localhost:3000/user/register",{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
            },
          body: JSON.stringify(data),
        });
        console.log(response.status)
/**Ha a szerver 201-es kódot küld vissza, akkor az azt jelenti, hogy az adatok sikeresen átmentek, és ezt a 4 kulcsot megjelníti. 
 *Ezáltal a felhasználó, kap egy üzenetet,  hogy a regisztráció sikeres volt, és az adatbázisban el lettek tárolv az adatai,
 ha a szerver nem 201-es kódot küld vissza akkor kap egy hiba jelzést, ami azt jelenti, hogy nem volt sikeres a regisztráció.*/
        if(response.status === 201){
          this.setState({
            singFullname: '',
            singEmail: '',
            singPass: '',
            singRePass: ''
          })
          this.setState({message: ['Sikeres regisztráció']})
        }
        else{
          const sing = await response.json() as ResponseMess 
          this.setState({message: sing.message})
        }

      
    }
  
/**Regisztrációs űrlap felület megjelnítésére szolgál. */
    render() {
        return(
          <div>
          <Header />
          <Container className="regcon">
            <form className="rgbborder">
            <div className="form-box"></div>
            <h3 style={{margin:'top'}}>Regisztráció</h3>
            <div className="input-box">
              <input type="text" 
              placeholder="Teljes név"
              required value={this.state.singFullname} onChange={e => this.setState({singFullname: e.currentTarget.value})}  />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email cím"
                required
                value={this.state.singEmail} onChange={e => this.setState({singEmail: e.currentTarget.value})}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Jelszó"
                required
                value={this.state.singPass} onChange={e => this.setState({singPass: e.currentTarget.value})}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Jelszó mégegyszer"
                required
                value={this.state.singRePass} onChange={e => this.setState({singRePass: e.currentTarget.value})}
              />
            </div>
            <div className="d-grid-s">
              <button type="button" style={{backgroundColor:" rgb(63, 0, 113)"}}  onClick={this.handleRegister}>
                Regisztráció
              </button>
              <p>{this.state.message}</p>
              <p className="forgot-password text-right" style={{color:'white'}}>
              <Link className='btn 'style={{marginRight:'7px', color:"white", textAlign: "right", paddingTop: "10px"}} to='/Login'>Itt betud jelentkezni fiókjába!</Link>
              </p>
            </div>
           
          </form>
        </Container>
        </div>
           
            
        )
    }
}

export default Singup;