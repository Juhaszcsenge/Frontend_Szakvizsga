import { Component } from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Singup from "./Singup";

function LoginHome() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="conatiner">
              <Link className="navbar-brand" to={"/sing-in"}>
                Sing in
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sing-up"}>
                      Sing Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner"> 
            </div>
          </div>
        </div>
      </Router>
    );
  }
export default LoginHome
