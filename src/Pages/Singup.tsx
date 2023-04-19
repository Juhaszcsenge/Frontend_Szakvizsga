import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {ResponseMess} from "../Response";
import Header from "../Comopnents/Header";


interface State {
  message: string[];
  singEmail: string;
  singFullname: string;
  singPass: string;
  singRePass: string;
}


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
       
        console.log("mukszik?")
        const data ={
          "fullName": this.state.singFullname,
          "email": this.state.singEmail,
          "password": this.state.singPass,
          "repassword": this.state.singRePass
        };

        let response = await fetch("http://localhost:3000/user/register",{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
            },
          body: JSON.stringify(data),
        });
        console.log(response.status)

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