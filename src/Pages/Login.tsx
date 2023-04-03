import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { TokenObj } from '../token';
import { useNavigate} from 'react-router-dom';


    interface State {
        message: string[];
        LogEmail: string;
        LogPass: string;
        token: string;
      }
      
      
      class Login extends Component <{}, State> {
        constructor(props: {}){
          super(props);
      
          this.state = {
            message: [],
            LogEmail: '',
            LogPass: '',
            token: ''
          }
        }
          handleLogin = async () => {
             if (this.state.LogEmail.trim()&& this.state.LogPass === ''){
              this.setState({message: ['Ne hagyja üresen a mezőket!'] })
              return;
             }
             else{
              const data ={
                email: this.state.LogEmail,
                password: this.state.LogPass,
              };
      
              let response = await fetch("http://localhost:3000/auth/login",{
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
             });
      
              if(response.status === 201){
                  const res = await response.json() as TokenObj
                 

                this.setState({
                  token: res.token,
                  message:['Sikeres bejelentkezés']
                })
                localStorage.setItem('token', this.state.token)
               
              }
      
             }

            }

       
       redirect = async () => {
        const navigate = useNavigate();
        navigate('/Menu', {replace: true});
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
                required value={this.state.LogEmail} onChange={e => this.setState({LogEmail: e.currentTarget.value})}
                />
            </div>
            <div className="mb-3">
                <label>Jelszó</label>
                <input 
                type="password"
                className="form-control"
                placeholder="Enter password" 
                required value={this.state.LogPass} onChange={e => this.setState({LogPass: e.currentTarget.value})}/>
                </div>

                <div className="mb-3">
                    <div className="custom-control-input"
                    id="customCheck1" />
                    <label className="custom-control-label" htmlFor="costumCheck1" style={{color:' rgb(228, 56, 228)'}}>
                        Emlékez rám
                    </label>
                </div>
                <div className="d-grid">
                    <button type="button" onClick={this.handleLogin} style={{backgroundColor:'black', color:' rgb(228, 56, 228)'}} >Submit</button>
                </div>
                <p>{this.state.message}</p>
                <p className="forgot-password text-right" style={{color:'rgb(228, 56, 228)'}}>
                    Elfelejett <a href="#">jelszó?</a>
                </p>
                    
        </form>
        </Container>
        )
       
    }
}

export default Login;