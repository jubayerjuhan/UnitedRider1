import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from "./../../App";
const Header = () => {
	const [loggedInUser] = useContext(UserContext);

	return (
		<>
			<nav>
				<div className="logo">
					<i style={{color: '#C2622F'}} class="fas fa-car fa-3x"></i>
					<h1 className="title">United Rider</h1>
				</div>

				<ul className="navlinks">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/Product">Product</Link></li>
					<li><Link to="/Service">Service</Link></li>
					<li><Link to="/Pricing">Pricing</Link></li>
					{
						loggedInUser.isSignedIn ?
						<li><button>Welcome, {loggedInUser.displayName}</button></li>:
						<li><Link to="/login"><button>Sign Up</button></Link></li>
					}
				</ul>
			</nav>
		</>
	);
};

export default Header;