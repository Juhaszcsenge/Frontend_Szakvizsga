import React, { Component } from "react";
import { Container } from 'react-bootstrap';

export default class  Login extends Component {
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
