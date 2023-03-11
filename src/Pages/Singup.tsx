import React, {Component} from "react";
import { Container } from 'react-bootstrap';

export default  class Singup extends Component {
    render() {
        return(
          <Container className="regcon">
            <form className="rgbborder">
            <div className="form-box"></div>
            <h3 style={{margin:'top'}}>Sign Up</h3>
            <div className="input-box">
              <label>Vezeték név</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="input-box">
              <label>Kereszt név</label>
              <input type="text" className="form-control" placeholder="Second name" />
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
              <button type="submit" className="btn btn-primary">
                Regisztráció
              </button>
            </div>
            <p className="forgot-password text-right">
              Már regisztrált <a href="/sign-in">bejelentkezik?</a>
            </p>
          </form>
        </Container>
           
            
        )
    }
}
