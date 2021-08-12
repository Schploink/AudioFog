import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.getLinks = this.getLinks.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps !== this.props) {
			return true;
		} else {
			return false;
		}
	}

	getLinks() {
		if (this.props.loggedIn) {
			return (
				<>
					<div className='nav-title'>
						Audiofog
					</div>
					<ul className='logged-in-nav'>
						<li>
							home
						</li>
						<li>
							discover
						</li>
						<li>
							search
						</li>
						<li>
							upload
						</li>
						<li>
							user profile
						</li>
            <li>
              logout
            </li>
					</ul>
				</>
			);
		} else {
			return <div className='nav-title'>AudioFog</div>; 
		}
	}

	render() {
		return <div className='navbar-container'>{this.getLinks()}</div>;
	}
}

export default NavBar;
