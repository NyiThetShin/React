import React from 'react';
import './Hero.css';
import slideOne from '../../images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg';
import slideTwo from '../../images/david-van-dijk-3LTht2nxd34-unsplash.jpg';
import slideThree from '../../images/michael-warf-f8egRYt5RGk-unsplash.jpg';


function Hero() {

    const [current,setCurrent] = React.useState(0)

    const imgAry = [

        {
            id: '1',
            img : slideOne
        },
        
        {
            id: '2',
            img : slideTwo
        },
        
        {
            id: '3',
            img : slideThree
        }
    ]

    const lastIndexValue = imgAry.length - 1;

        const nxtBtn = () => {
            setCurrent(lastIndexValue == current ? 0 : current + 1)
        }
        
        const prevBtn = () => {
            setCurrent(current == 0 ? lastIndexValue : current - 1)
        }
    




    return ( 

        <>   
        
            <div className="hero_wrapper" id='home'>
                <div className="hero_container">
                    {imgAry.map((item,index) => (
                        <div className={index == current ? 'img_ctn active' : 'img_ctn'} key={index}>
                            {index == current && ( <img src={item.img} alt="" /> )}
                        </div>
                    ))}
                      <h1>Furniture <span>Shop</span></h1>  
                      <div className="btn_gp">
                            <button>Shop Now</button>
                      </div>
                      <i className="fa-solid fa-angle-left left" onClick={prevBtn}></i>
                     <i className="fa-solid fa-angle-right right" onClick={nxtBtn}></i>
                      
                </div>
            </div>
        
        </>


     );
}

export default Hero;