import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

/**Mobil applikációt tájékoztató felület, hogy van mobil applikációnk, és a link a Google Play áruházba irányít át */
const Donwload = () => {
    return (
        <Container className="app_container">
            <Row>
                <Col lg='6' md='6'>
                    <div className="app_img">
                        <img src="/mobilapp.png" alt="" style={{ width: "350px", height: "auto", marginLeft: "50px", borderRadius: "40px"}}></img>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="app_content">
                        <h5>
                            Töltsd le mobil applikációnkat!
                        </h5>
                        <h2 className="mb-4">
                            Szeretnél könnyedén és gyorsan rendelni kedvenc ételeidet az éttermünkből?
                        </h2>

                        <button className="app_btns" style={{textAlign:"center"}}>
                            <a href="https://play.google.com/store/apps?hl=hu&gl=US" style={{color:"white"}}>Letöltés</a>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Donwload;