import React from 'react';

const NavBar = (props) => {

  return (
<div>
  <body>
    <div className="grid-container">
      <div className="header">
        <div className="topnav">
	         <div className="link-block">
  	         <a href="#top" id="site-title" style={{float:"left"}}>{props.siteTitle}</a>
 	           <a href="#top">Contact</a>
 	           <a href="#top">Marketing</a>
             <a href="#top">Media</a>
	        </div>
        </div>

        <div className="topnav2">
	         <div className="link-block">
            <a href="/news">NEWS</a>
            <a href="/business">BUSINESS</a>
            <a href="#top">SPORT</a>
  		      <a href="#top">LIFE</a>
  		      <a href="#top">TECH</a>
  		      <a href="#top">TRAVEL</a>
 	         </div>
        </div>
      </div>
    </div>
  </body>
</div>
  );
}

export default NavBar;
