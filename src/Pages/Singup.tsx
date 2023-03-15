import React, {Component} from "react";
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {ResponseMess} from "../Response";


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
       else{
        const date ={
          fullName: this.state.singFullname,
          email: this.state.singEmail,
          password: this.state.singPass,
          repassword: this.state.singRePass
        };

        let response = await fetch("http://localhost:3000/user/register",{
          method: 'POST',
          /*headers: {
          'Authorization' : 'Bearer ' + a0565e94fb8fbe8a4343c23da6616414f35add2139d11da8fcea65943484ce7e
          'Content-Type': 'application/json'
          },*/
          body: JSON.stringify(Register request),
        });

        if(response.ok){
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
    }
  

    render() {
        return(
          <Container className="regcon">
            <form className="rgbborder">
            <div className="form-box"></div>
            <h3 style={{margin:'top'}}>Sign Up</h3>
            <div className="input-box">
              <label>Teljes név</label>
              <input type="text" value={this.state.singFullname} onChange={e => this.setState({singFullname: e.currentTarget.value})} className="form-control" placeholder="Full name" />
            </div>
            <div className="input-box">
              <label>Email cím</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="input-box">
              <label>Jelszó</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={this.handleRegister}>
                Regisztráció
              </button>
            </div>
            <p className="forgot-password text-right">
              Már regisztrált <Link to="./Login.tsx"></Link>bejelentkezik?</p>
          </form>
        </Container>
           
            
        )
    }
}

export default Singup;