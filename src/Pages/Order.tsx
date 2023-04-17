import Header from "../Comopnents/Header";
import React, {Component, useEffect, useState} from "react";
import Footer from "../Comopnents/Footer";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
import { isTemplateExpression } from "typescript";

    interface State{
      Cart: CartItems[]
      sumTotal: string;
  
  }
  
  interface Menu{
      food_id : number;
      food_name : string;
      food_description : string;
      food_category : string;
      food_price : number;
      food_image: string;
  }
  
  interface CartResponse{
      shoppingCart : CartItems[]
      sumTotal: string;
  }
  
  interface CartItems{
      id: string;
      total: number;
      quantity: number;
      menuItem: Menu;
  }


  export default class Order extends Component< {}, State> {
    constructor(props: {}) {
        super(props)
        this.state = { 
            Cart:[],
            sumTotal: ''
        }
    }
    
    
      
    loadData = async () => {
        let response = await fetch('http://localhost:3000/cart', {
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('token'),
        
        }}) /* lehúzzuk az adatbázisból az adatokat*/
        let data = await response.json() as CartResponse 
        this.setState({
            Cart : data.shoppingCart,
            sumTotal: data.sumTotal
        }) //state értékek megváltoztatása


    }
    componentDidMount(): void { // lefussanak bizonyos függvények mikor betölt az oldal
        this.loadData()
    }

    let maxLength = "20"


    render(){
      return (
        <section className="h-100 h-custom" style={{ backgroundColor: " #0c1022" }}>
          <Header/>
          <MDBContainer className="py-5 h-100" style={{ backgroundColor: " #0c1022" }}>
            <MDBRow className="justify-content-center align-items-center h-100" style={{ backgroundColor: " #0c1022 " }}>
              <MDBCol>
                <MDBCard style={{ backgroundColor: "#2f0c53" }}>
                  <MDBCardBody className="p-4">
                    <MDBRow>
                      <MDBCol lg="7">
                      {this.state.Cart.map((item) => (
                      <div key={item.id}>
                      <MDBCard className="mb-3" style={{ backgroundColor: "#0c1022 " }} >
                      <MDBCardBody style={{ backgroundColor: "#0c1022 " }}>
                        <MDBCardTitle>{item.menuItem.food_name}</MDBCardTitle>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage 
                              src={'http://localhost:3000/burgers/' + item.menuItem.food_image}
                                fluid className="rounded-3" style={{ width: "80px" }}
                                alt="Shopping item" />
                            </div>
                            <div className="ms-3">
                              <MDBCardText></MDBCardText>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                               <MDBCardText>{item.quantity}</MDBCardText>
                            </div>
                            <div style={{ width: "80px" }}>
                            <MDBCardText>{item.menuItem.food_price}</MDBCardText>
                            </div>
                            <a href="#!"  style={{ backgroundColor: "#2f0c53" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                      </MDBCard>
                      </div>

                      
                    ))}
                       
                      </MDBCol>
        
                      <MDBCol lg="5">
                        <MDBCard className=" text-white rounded-3" style={{ backgroundColor: " #0c1022" }} >
                          <MDBCardBody style={{ backgroundColor: " #0c1022" }}>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <MDBTypography tag="h5" className="mb-0">
                                Card details
                              </MDBTypography>
                              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                            </div>
        
                            <p className="small">Card type</p>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-amex fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                            </a>
                            
                            <form className="mt-4">
                              <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                                placeholder="Cardholder's Name" contrast />
        
                              <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                                minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
        
                              <MDBRow className="mb-4">
                                <MDBCol md="6">
                                  <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                    minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                </MDBCol>
                                <MDBCol md="6">
                                  <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                    maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                </MDBCol>
                              </MDBRow>
                            </form> 
        
                            <hr />
        
                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Subtotal</p>
                              <p className="mb-2">$4798.00</p>
                            </div>
        
                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Shipping</p>
                              <p className="mb-2">$20.00</p>
                            </div>
        
                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Total(Incl. taxes)</p>
                              <p className="mb-2">$4818.00</p>
                            </div>
        
                            <MDBBtn color="info" block size="lg">
                              <div className="d-flex justify-content-between">
                                <span>$4818.00</span>
                                <span>
                                  Checkout{" "}
                                  <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                </span>
                              </div>
                            </MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer/>
        </section>
       
        );
        }
    }
   