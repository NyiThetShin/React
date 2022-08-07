import React from 'react';
import './Footer.css';
import payPal from '../../images/muhammad-asyfaul-f2tNsobMisQ-unsplash.jpg'
import visa from '../../images/R.jpg'
import jcb from '../../images/jcb.png'
function Footer() {
    return ( 

        <div className="footer_wrapper">
            <div className="footer_container">
                <div className="footer_four_section">
                    <div className="footer_one">
                        <h4>Company</h4>
                        <ul>
                            <li>About Us </li>
                            <li>Contact Us </li>
                            <li>Privacy Policy</li>
                            <li>Terms And Conditions</li>
                            <li>Support Centre</li>
                        </ul>
                    </div>
                    <div className="footer_two">
                        <h4>Questions?</h4>
                        <ul>
                            <li>Help Support</li>
                            <li>Track Order</li>
                            <li>Raturn</li>
                            <li>Shipping info</li>
                            <li>History</li>
                        </ul>
                    </div>
                    <div className="footer_three">
                        <h4>Userful links</h4>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Size Chart</li>
                            <li>My Account</li>
                            <li>Ours location</li>
                            <li>FAQS</li>
                        </ul>
                    </div>
                    <div className="footer_four">
                        <h4>Connect With Me</h4>
                        <div className="icon_section">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <div className="last_icon">
                            <i className="fa-solid fa-location-arrow"></i>
                            <p>123,Lorem Ipsum,USA</p>
                        </div>
                         <div className="last_icon">
                            <i className="fa-solid fa-envelope"></i>
                            <p>example@gmail.com</p>
                        </div>
                         <div className="last_icon">
                           <i className="fa-solid fa-phone"></i>
                            <p>123 456 7890</p>
                        </div>
                    </div>
                </div>
                <div className="footer_payment_section">
                        <div className="payment_img_ctn">
                              <img src={payPal} alt="" />
                              <img src={visa} alt="" />
                              <img src={jcb} alt="" />
                        </div>
                </div>
                <div className="footer_copyright">
                        Minimal Furniture Store Made by Anonymous
                </div>
            </div>
        </div>



     );
}

export default Footer;