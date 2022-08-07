import React from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import Product from './component/product/Product';
import Service from './component/Servixe/Service';
import Subscribe from './component/Subscribe/Subscribe';



function App({cartCount,handleCart,cardInfo}) {






  return ( 
 

    
           
                  
          <div>



             
              <Hero />
              <Service />
              <Product handleCart={handleCart} cardInfo={cardInfo} />

            
              <Subscribe />
              <Footer />
        
             
          
  
           </div>
          

          
             
          
        
            
      


  
      
    
   

   );
}

export default App;