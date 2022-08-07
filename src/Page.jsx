import React from 'react';
import App from './App';
import Nav from './component/Nav/Nav';
import Cart from './component/product/Cart';
import oneIMage from './images/david-van-dijk-3LTht2nxd34-unsplash.jpg';
import twoImage from  './images/andrea-davis-Hggo81-zgxE-unsplash.jpg';
import threeImage from  './images/chastity-cortijo-R-w5Q-4Mqm0-unsplash.jpg';
import fourImage from  './images/collov-home-design--aDGbdTsBZg-unsplash.jpg';
import fiveImage from  './images/hannah-busing-nME9TubZtSo-unsplash.jpg';
import sixImage from  './images/jean-philippe-delberghe-feijc-nqWKM-unsplash.jpg';
import sevenImage from  './images/minh-pham-OtXADkUh3-I-unsplash.jpg';
import eightImage from  './images/sidekix-media-5O-KFVmKSjY-unsplash.jpg';
function Page() {

   const cardInfo = [
        {
            id : '1',
            img : oneIMage,
            price : '20' ,
           name:'Product Name'
        },
          {
            id : '2',
            img : twoImage,
            price : '40' ,
           name:'Product Name'
        },
          {
            id : '3',
            img : threeImage,
            price : '50' ,
            name:'Product Name'
        },
          {
            id : '4',
            img : fourImage,
            price : '60',
            name:'Product Name'
        },
           {
            id : '5',
            img : fiveImage,
            price : '60',
          name:'Product Name'
        },
           {
            id : '6',
            img : sixImage,
            price : '60' ,
            name:'Product Name'
        },
           {
            id : '7',
            img : sevenImage,
            price : '60' ,
           
        },
           {
            id : '8',
            img : eightImage,
            price : '60',
            
        },
     
    ]

  const [cartCount , setCartCount ] = React.useState(0);
  const [cart,setCart] = React.useState([]);
  const [condition ,setCondition] = React.useState(true);

  const handleCart = (obj) => {

     
    
      
      const cartLength = cart.length;

      if(cartLength == 0) {
        console.log('your array is empty')
        setCartCount(cartCount + 1)
        setCart([
          {
            id : obj.id,
            img : obj.img,
            name : obj.name,
            price : obj.price,
  
          }
        ])
        
      }else{
         cart.map((item) => {
        if(item.id == obj.id){
          console.log('Item Id ',item.id);
            console.log('obj Id ',obj.id);
          return;
        }else{
          setCartCount(cartCount + 1)
          setCart([...cart,{
            id : obj.id,
            img : obj.img,
            name : obj.name,
            price : obj.price,
        
          }])
        }
      })
      }
}

const toggleCart = () => {
    setCondition(!condition)
}





    return ( 

        <>
            <Nav setCondition={setCondition} cartCount={cartCount} toggleCart={toggleCart}  />
            {condition ? <App cartCount={cartCount} handleCart={handleCart} cardInfo = {cardInfo}/> :   <Cart cart={cart} /> }
            
          
        
        </>



     );
}

export default Page;