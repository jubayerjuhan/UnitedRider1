import React from 'react';
import './Header.css'
const Header = () => {
	return (
		<>
			<nav >
				<div className="logo">
					<i style={{color: '#C2622F'}} class="fas fa-car fa-3x"></i>
					<h1>United Rider</h1>
				</div>

				<ul className="navlinks">
					<li>Home</li>
					<li>Pricing</li>
					<li>Service</li>
					<li>Products</li>
					<li><button>Contact Us</button></li>
				</ul>
			</nav>
		</>
	);
};

export default Header;