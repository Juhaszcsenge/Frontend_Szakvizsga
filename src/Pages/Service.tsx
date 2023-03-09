import React, { Component } from 'react';
import { Container } from 'react-bootstrap/lib/Tab';


export default  class Singup extends Component {
    render(){
        return(
            <section id='services'>
                <div className='title'>
                    <h1 className='pink' style={{textAlign: "center", color:"rgb(228, 56, 228)"}}>Szakácsaink</h1>
                </div>
                <div className='services'>
                    <div className='servicex'>
                        <img src='./white.jpg' alt=''></img>
                        <p style={{color:"rgb(228, 56, 228)"}}>
                        He Printing and Typesetting the industry. 
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='service-pink'>
                        <img src='./white.jpg' alt=''></img>
                        <p style={{color:"rgb(228, 56, 228)"}}>
                        He Printing and Typesetting the industry.
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className='service'>
                        <img src='./white.jpg' alt=''></img>
                        <p style={{color:"rgb(228, 56, 228)"}}>
                        He Printing and Typesetting the industry. 
                        has been the Industry's
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </section>
        )
    }
}