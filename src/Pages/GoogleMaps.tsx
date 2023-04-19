import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


const GoogleMaps = () => {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    return (
        <Container className="map">
            <section id="menux">
                <div className="title">
                    <h1>
                        <span>Csatlakozz hozzánk!</span> 
                         
                    </h1>
                </div>
            <Row>
                <Col lg='6' md='6'>
                    <div className="row.map">
                    <iframe 
                    title="Google Térkép"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30479.316857279693!2d19.087223693324653!3d47.528542655568806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db0f2ac18b29%3A0x491217be41417b15!2zUGzDqWhjc8OhcmRh!5e0!3m2!1shu!2shu!4v1681907050117!5m2!1shu!2shu" 
                    width="100%" 
                    height="300px" 
                    style={{border:0}}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="row">
                       <form>
                        <h3>Vedd fel velünk a kapcsolatot!</h3>
                        <div className="input-box">
                           <input type="text" placeholder="Teljes név"/>
                        </div>
                        <div className="input-box">
                           <input type="text" placeholder="Email"/>
                        </div>
                        <div className="input-box">
                           <input type="text" placeholder="Telefonszám"/>
                        </div>
                        <input type="submit" value="Contact now" className="btn" style={{backgroundColor: " #8314b3"}}/>
                       </form>
                    </div>
                </Col>
            </Row>
            </section>
        </Container>
    )
}
export default GoogleMaps;