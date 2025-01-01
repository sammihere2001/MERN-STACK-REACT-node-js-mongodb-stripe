import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your craving and elevate your dining exerience, one delicious meal at a time.</p>
        
       <a href="#explore-menu"> <button>View Menu</button> </a>
      </div>
    </div>
  )
}

export default Header
