import React from 'react';
import './Service.css';


function Service() {
    return (  

        <>
        
            <div className="service_wrapper">
                <div className="service_container">
                    <div className="delivery">
                        <i class="fa-solid fa-location-arrow"></i>
                        <p>free delivery </p>
                    </div>
                    <div className="review">
                       <i class="fa-solid fa-user"></i>
                        <p>review by our customers</p>
                    </div>
                    <div className="shipping">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                        <p>Free Returns </p>
                    </div>
                </div>
            </div>
        
        </>




    );
}

export default Service;