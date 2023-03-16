import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import {ResponseMess} from "../Response";


    interface State {
        message: string[];
        LogEmail: string;
        LogPass: string;
      }
      
      
      class Login extends Component <{}, State> {
        constructor(props: {}){
          super(props);
      
          this.state = {
            message: [],
            LogEmail: '',
            LogPass: ''
          }
        }
          handleRegister = async () => {
             if (this.state.LogEmail.trim() === ''){
              this.setState({message: ['Kérjük adja meg az email címét!'] })
              return;
             }
             else if(this.state.LogPass === ''){
              this.setState({message: ['Kérjük adja meg a jelszavát']})
              return;
             }
             else{
              const data ={
                email: this.state.LogEmail,
                password: this.state.LogPass,
              };
      
              let response = await fetch("http://localhost:3000/auth/login",{
                method: 'POST',
                /*headers: {
                'Authorization' : 'Bearer ' + a0565e94fb8fbe8a4343c23da6616414f35add2139d11da8fcea65943484ce7e
                'Content-Type': 'application/json'
                },*/
                body: JSON.stringify(data),
              });
      
              if(response.ok){
                this.setState({
                  LogEmail: '',
                  LogPass: '',
                })
                this.setState({message: ['Sikeres bejelentkeztés']})
              }
              else{
                const sing = await response.json() as ResponseMess 
                this.setState({message: sing.message})
              }
      
             }
          }
        
    
    render() {
        return(
            <Container className="logcon">
            <form className="rgblog">
            <div className="form-bok"></div>
            <h1>Sing in</h1>
            <div className="mb-3">
                <label>Email cím</label>
                <input 
                type="email"
                className="form-control"
                placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Jelszó</label>
                <input 
                type="password"
                className="form-control"
                placeholder="Enter password" />
                </div>

                <div className="mb-3">
                    <div className="custom-control-input"
                    id="customCheck1" />
                    <label className="custom-control-label" htmlFor="costumCheck1" style={{color:' rgb(228, 56, 228)'}}>
                        Emlékez rám
                    </label>
                </div>
                <div className="d-grid">
                    <button type="submit" style={{backgroundColor:'black', color:' rgb(228, 56, 228)'}}>Submit</button>
                </div>
                <p className="forgot-password text-right" style={{color:'rgb(228, 56, 228)'}}>
                    Elfelejett <a href="#">jelszó?</a>
                </p>
                    
        </form>
        </Container>
        )
       
    }
}

export default Login;