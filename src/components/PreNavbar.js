import React from 'react'
import '../styles/PreNavbar.css'


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="35" width="48"><path d="M14.5 44q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55Q13 36.8 14.5 36.8q1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q16 44 14.5 44Zm20.2 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q36.2 44 34.7 44ZM24 19.3l-2.1-2.1 3.7-3.7h-9.1v-3h9.1l-3.7-3.7L24 4.7l7.3 7.3ZM3.1 7V4h5.8l8.5 18.2h14.4l8-14h3.35l-8.1 15.15q-.5.85-1.4 1.475-.9.625-1.95.625H16.55l-2.8 5.2H38.3v3H14.2q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L7 7Z"/></svg>
const PreNavbar = () => {
  return (
    <div className="preNav">
    <div>
        <a  href="#">SAMSUNG BD</a> <span>|</span>
        <a  href="#">GET MI STORE APP</a> <span>|</span>
        <a  href="#">RETAIL STORE ﹀</a>
    </div>
    <div>
    <a  href="#">SIGN IN</a> <span>|</span>
        <a  href="#">SIGN UP</a> <span>|</span>
        <a  href="#"> {cartIcon} CART (0)</a>   
    </div>
   
</div>


  )
}

export default PreNavbar