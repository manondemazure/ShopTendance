import React from 'react';
import {useState} from "react"
import Logo from '../logo3.png'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className='navbar_logo'>
      <a href="/" > <img className="LogoBar" src={Logo} alt="Logo"/></a>
      </div>
      <ul className='navbar_links'>
        <li className='navbar_item slideInDown-1'>
          <a href="/homme" className='navbar_link'>Homme</a>
        </li>
        <li className='navbar_item slideInDown-2'>
          <a href="/femme" className='navbar_link'>Femme</a>
        </li>
        <li className='navbar_item slideInDown-3'>
          <a href="/accessoire" className='navbar_link'>Accessoire</a>
        </li>
		<li className='navbar_item slideInDown-4'>
          <a href="/chaussure" className='navbar_link'>Chaussure</a>
        </li>
      </ul>
      <button className='navbar_burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>
    </nav>
  )
}

export default Navbar;