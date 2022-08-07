import React from 'react';
import './Product.css';


function Navigate() {
    return (  

        <>
        
            <div className="navigate_wrapper">
                    <div className="menu">
                        <div className='active'>new </div>
                         <div>best</div>
                          <div>specials</div>
                           <div>featured</div>
                    </div>
                    <div className="filter">
                        <div >Filter</div>
                        <div><i class="fa-solid fa-angle-down"></i></div>
                    </div>
            </div>
        </>


    );
}

export default Navigate;