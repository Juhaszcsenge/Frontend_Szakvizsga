import React, { Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';


export default  class Singup extends Component {
    render(){
        return(
            <section id='services'>
                <Container>
                    <Row>
                        <Col>
                        <div className='skill-bx wow zoomIN'></div>
                        <div className='title'>
                            <h1 className='pink' style={{textAlign: "center"}}>Szakácsaink</h1>
                        </div>
                        <div className='services'>
                            <div className='service'>
                        <img src='./white.jpg' alt=''></img>
                        <p>
                        He Printing and Typesetting the industry. 
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                        </div>
                            <div className='service'>
                        <img src='./white.jpg' alt=''></img>
                        <p>
                        He Printing and Typesetting the industry.
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                        </div>
                            <div className='service'>
                        <img src='./white.jpg' alt=''></img>
                        <p>
                        He Printing and Typesetting the industry. 
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                         </div>
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
            
        )
    }
}