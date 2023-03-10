import React, { Component } from 'react';


export default  class Singup extends Component {
    render(){
        return(
            <section id='services'>
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
            </section>
        )
    }
}