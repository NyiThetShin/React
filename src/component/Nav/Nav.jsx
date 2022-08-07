import React from 'react';
import './Nav.css';
import logo from '../../images/living-room.png';
import {Link} from 'react-router-dom';




function Nav({cartCount,setCondition,toggleCart}) {

    const [toggle,setToggle] = React.useState(false);

React.useEffect(() => {
    
    window.addEventListener('resize' ,() => {
    const windowInnerWidth = window.innerWidth;
    if(windowInnerWidth > 900) {
        const toggleNav = document.querySelector('.toggle_nav');
        toggleNav.style.display = 'none'
    }
})
},[])

const handleToggle = () => {
    setToggle(!toggle);
}

    return ( 

        <>

                <div className="nav_wrapper">
                        <div className="nav_container">
                            <div className="first_nav">
                                <div className="logo_ctn" onClick={() => setCondition(true) }>
                                    <img src={logo} alt="" />
                                </div>
                                <div className="nav_menu">
                                    <ul>
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#product">Product</a></li>
                                        <li><a href="#Subscribe">Subscribe</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="second_nav">
                                <div className="search_ctn">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type=""  placeholder='Search products..'/>
                                </div>
                                <div className="cart">
                                    <div>{cartCount}</div>
                                  <i class="fa-solid fa-bag-shopping" onClick={toggleCart}></i>
                                </div>
                            </div>

                           <div className="toggle_bar" onClick={handleToggle}>
                             { toggle ?  <i class="fa-solid fa-xmark"></i> :  <i class="fa-solid fa-bars-staggered"></i> }
                           </div>
                        </div>
                        {toggle &&  <div className="toggle_nav">
                                <div>Home</div>
                                <div>Featured</div>
                                <div>Shop</div>
                        </div> }
                </div>
        
        </>

     );
}

export default Nav;