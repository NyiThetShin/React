import React from 'react';
import './Subscribe.css';


function Subscribe() {
    return ( 

        <>
        
        <div className="subscribe_wrapper" id='Subscribe'>
            <div className="subscribe_container">
                <div className="sCard">
                    <h3>NEWSLETTER</h3>
                    <p>SIGN UP TO OUR NEWSLETTER  AND <br></br> SAVE 20%  OFF YOUR NEXT PURCHASE  </p>
                </div>
                <div className="sInput">
                    <div className="input_gp">

                        <input type="text"  placeholder='Enter your email'/>
                        <div className="sBtn">SUBSCRIBE</div>
                    </div>
                </div>
            </div>
        </div>
        
        </>



     );
}

export default Subscribe;