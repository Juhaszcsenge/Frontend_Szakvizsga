import React, {Component} from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  


export default class Fooldal extends Component {
    render(){
        return (
            <MDBCarousel showControls showIndicators>
            <MDBCarouselItem
              className='w-100 d-block jutify-content '
              itemId={1}
              src='https://mdbootstrap.com/img/new/slides/041.jpg'
              alt='...'
            />
            <MDBCarouselItem
              className='w-100 d-block '
              itemId={2}
              src='https://mdbootstrap.com/img/new/slides/042.jpg'
              alt='...'
            />
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src='https://mdbootstrap.com/img/new/slides/043.jpg'
              alt='...'
            />
          </MDBCarousel>
        ) 
    }
}