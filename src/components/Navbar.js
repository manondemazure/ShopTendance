import React from 'react';
import {useState} from "react"
import { useDispatch } from 'react-redux';
import Logo from '../logo3.png'
import { Link } from 'react-router-dom';
import { setSelectedCategory } from '../actions/post.action';

const categories = ['Homme', 'Femme', 'Unisexe', 'Accessoires', 'Chaussures'];

const Navbar = () => {

const [showLinks, setShowLinks] = useState(false);
const dispatch = useDispatch();

const handleShowLinks = () => {
	setShowLinks(!showLinks)
}

const handleCategoryClick = (category) => {
	dispatch(setSelectedCategory(category));
}

return (
	<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
	<div className='navbar_logo'>
	<Link to="/">
		<img className="LogoBar" src={Logo} alt="Logo" />
	</Link>
	</div>
	<ul className='navbar_links'>
		{categories.map((category, index) => (
		<li key={index} className={`navbar_item slideInDown-${index + 1}`}>
			<button onClick={() => handleCategoryClick(category)} className='navbar_link'>
				{category}
			</button>
		</li>
		))}
	</ul>
	<button className='navbar_burger' onClick={handleShowLinks}>
		<span className='burger-bar'></span>
	</button>
	</nav>
	)
	}

export default Navbar;