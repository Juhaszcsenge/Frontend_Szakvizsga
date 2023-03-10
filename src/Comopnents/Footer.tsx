import React, { Component } from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
   export default class Footer extends Component{
    render(){
        return (
            <MDBFooter className='bg-dark-p3 text-center text-white' style={{backgroundColor: 'black'}}>
            <MDBContainer className='p-4 pb-0'>
              <section className='mb-4'>
                <MDBBtn outline color="light" floating className='m-1'  href="#" role='button'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
      
                <MDBBtn outline color="light" floating className='m-1' href='#' role='button'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>
      
                <MDBBtn outline color="light" floating className='m-1' href='#' role='button'>
                  <MDBIcon fab icon='google' />
                </MDBBtn>
                <MDBBtn outline color="light" floating className='m-1' href= '#' role='button'>
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>
      
                <MDBBtn outline color="light" floating className='m-1' href='#' role='button'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
              </section>
            </MDBContainer>
      
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
              © 2020 Copyright:
              <a className='text' href='https://mdbootstrap.com/'>
                MDBootstrap.com
              </a>
            </div>
          </MDBFooter>
        );
        }
}
  