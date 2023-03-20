import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
 
export default  class MenuKedvencek extends Component {
    render(){
        const data = [
            {
                image: './sajtburger.jpg',
                name: "Sajtbuger",
                price: "2500Ft"
            },
            {
                image: './páros menü.jpg',
                name: "Páros menü",
                price:"4000Ft"
            },
            {
                image: './Pulled-Pork.jpg',
                name: "Pulled-Pork",
                price:"3000Ft"
            },
            {
                image:'./csaladi csomag.jpg',
                name:"Családi Csomag",
                price:"5999Ft"
            }

        ];
        return(
            <Container>
            <section id="menux">
                <div className="title">
                    <h1>
                        <span>Aktuális kedvenceink</span> 
                         
                    </h1>
                </div>
                <div className="menu">
                    {data.map((menu) => {
                        return(
                            <div className="menus">
                                <div className='image'>
                                    <img src={menu.image} alt="" />
                                </div>
                                <h2>{menu.name}</h2>
                                <h3>{menu.price}</h3>
                                <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
                                <button>Buy now</button>
                            </div>

                        );
                    })}

                </div>
            </section>
        </Container>
        )

    }
}
