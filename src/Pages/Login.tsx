import React, { Component } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";

export default class  Login extends Component {
    render() {
        return(
            
            <form>
            <h1>Sing in</h1>
            <div className="mb-3">
                <label>Eamil address</label>
                <input 
                type="email"
                className="form-control"
                placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input 
                type="password"
                className="form-control"
                placeholder="Enter password" />
                </div>

                <div className="mb-3">
                    <div className="custom-control-input"
                    id="customCheck1" />
                    <label className="custom-control-label" htmlFor="costumCheck1">
                        Remember me
                    </label>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                    
        </form>
        )
       
    }
}
