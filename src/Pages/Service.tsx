import React, { Component } from 'react';
import './Service.css';

export default  class Singup extends Component {
    render(){
        return(
            <section id='services'>
                <div className='title'>
                    <h1 className='pink'>Mit ehetsz nálunk?</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
                    incidunt magnam labore ipsam vero minima maxime doloribus dolores ipsa
                    soluta.
                    </p>
                </div>
                <div className='services'>
                    <div className='services'>
                        <img src='./white.jpg' alt=''></img>
                        <p>
                        He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='service pink'>
                        <img src='./white.jpg' alt=''></img>
                        <p>
                        He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='service'>
                        <img src='./white.jpg' alt=''></img>
                        <p>
                        He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </section>
        )
    }
}