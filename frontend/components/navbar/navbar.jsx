import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
				<div className="navbar-container">
					<div className="navbar-contents">
						<div className="navbar-left">
							<div className='nav-title'>
								<img className="nav-logo" src={window.audioFogLogo} alt="Audiofog logo" />
							</div>
									<a className='nav-home'> Home </a>
									<a className='nav-stream'> Stream </a>
						</div>
						<div className="navbar-right">
									<a className='nav-upload'> Upload </a>
									<a className='nav-user'> User Profile </a>
									<a className='nav-git'> github </a> 
									<a className='nav-linked'> linkedin </a> 
									<a className='nav-angel'> angellist </a> 
									<a className="logout" onClick={this.props.logout}>Log Out</a>
						</div>
					</div>
				</div>
		)}
}

export default NavBar;
