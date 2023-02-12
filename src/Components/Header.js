import React from "react";


class Header extends React.Component {
   render(){
  return (
<>
<header class="head">

<section class="header">

   <div class="header-1">
    
     
     <div class="header-2">
      <h1 className="nameHead"></h1>
      <nav class="nav">
         <a href="./index.html">Home</a>
         <a href="./aboutUs.html">About Us</a>        
         <a href="./contactUs.html">Contact Us</a>
      </nav>
      
   </div>

     <div class="icon">
         <div id="search-btn" class="fas fa-search"></div>
         <a href="./search.html" class="fas fa-search"></a>
         <a href="./yourCart.html" class="fas fa-shopping-cart"></a>
         <a href="./login.html" class="fas fa-user"></a>
     </div>
 
   </div>
 

   
</section>
</header>

</>

  )
   }

}

export default Header ;



