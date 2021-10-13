import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
				<div className="navbar-container">
					<div className='nav-title'>
						<img className="nav-logo" src={window.audioFogLogo} alt="Audiofog logo" />
					</div>
					<ul className='logged-in-nav'>
						<li>
							<a href=""> Home </a>
						</li>
						<li>
							<a> Stream </a>
						</li>
						<li>
							<a> Upload </a>
						</li>
						<li>
							user profile
						</li>
						<li>
							<a> github </a> <a> linkedin </a> <a> angellist </a> 
						</li>
            <li>
							<button className="logout" onClick={this.props.logout}>Log Out</button>
            </li>
					</ul>
				</div>
		)}
}

export default NavBar;
