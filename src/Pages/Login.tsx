import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { TokenObj } from '../token';
import { useNavigate} from 'react-router-dom';
import Header from "../Comopnents/Header";


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
                localStorage.setItem('token', res.token)
                window.location.replace('/Fooldal')
               
              }
      
             }

            }

       
       redirect = async () => {
        const navigate = useNavigate();
        navigate('/Menu', {replace: true});
       }
        
    
    render() {
        return(
          <div>
            <Header />
            <Container className="logcon"> 
            <form className="rgblog">
            <div className="form-bok"></div>
            <h3 style={{margin:'top', textAlign:"center"}}>Bejelentkezés</h3>
            <div className="input-box">
                <input 
                type="email"
                placeholder="Email cím"
                required value={this.state.LogEmail} onChange={e => this.setState({LogEmail: e.currentTarget.value})}
                />
            </div>
            <div className="input-box">
                <input 
                type="password"
                placeholder="Jelszó"
                required value={this.state.LogPass} onChange={e => this.setState({LogPass: e.currentTarget.value})}/>
                </div>

                <div className="d-grid">
                    <button type="button" onClick={this.handleLogin} style={{backgroundColor:'rgb(63, 0, 113)', color:'white'}} >Submit</button>
                </div>
                <p>{this.state.message}</p>
                <p className="forgot-password text-right" style={{color:'white'}}>
                    Elfelejett <a href="https://www.avast.com/random-password-generator#pc">jelszó?</a>
                </p>
                    
        </form>
        </Container>
        </div>
        )
       
    }
}

export default Login;