import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


const MyCarousel: React.FC = () => {
  return (
        <Container fluid >
        <div className='title-holder'>
        </div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          style={{width:"1000px", height:"500px"}}
          src="./imag01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          style={{width:"1000px", height:"500px"}}
          src="./páros menü.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          style={{width:"1000px", height:"500px"}}
          src="sajtburger.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </Container>
    
  );
};

export default MyCarousel;