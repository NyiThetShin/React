import React from 'react';
import Head from './Head';
import Navigate from './navigate';
import './Product.css';


function Product({handleCart,cardInfo}) {

   









    return ( 

        <>
        
            <div className="product_wrapper" id='product'>
                    <div className="product_container">
                        <Head />
                        <Navigate />
                    </div>
                    <div className="product_card_ctn">
                        {cardInfo.map((item,index) => (
                            <div className="card" key={index}>
                                <div className="img_ctn">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="pd_name">Product Name</div>
                                <div className="pd_price">${item.price}</div>
                                <div className="card_hover">
                                        <i className="fa-solid fa-cart-arrow-down" onClick={() => handleCart(item)}></i>        
                                </div>
                            </div>
                        ))}
                        <div className="load">
                            <button>Load More</button>
                        </div>
                    </div>
            </div>


        </>


     );
}

export default Product;