import React from 'react';
import './Product.css';

function Cart({cart}) {




    return ( 

        <>
        <div className="cart_wrapper">
            {cart.map((item,index) => (
                <div className="cart_ctn" key={index}>
                    
                    <div className="cart_img_gp">
                    
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                    </div>   

                    <div className="price">
                        <span style={{color:"red",marginRight:"5px"}}>Price </span> : <p>{item.price}</p>
                    </div>

                </div>   
            ))
            
            } 
        </div>

        
        </>


     );
}

export default Cart;