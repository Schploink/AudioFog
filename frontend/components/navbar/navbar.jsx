import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'


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
									<Link to="/discover" className='nav-home'> Home </Link>
									<Link to="/discover" className='nav-stream'> Stream </Link>
						</div>
						<div className="navbar-right">
									<Link to="/upload" className='nav-upload'> Upload </Link>
									<Link to={`/users/${this.props.user.id}`} className='nav-user'> Greetings, {this.props.user.username} </Link>
									<a className="navbar-gh-icon-parent" href="https://github.com/Schploink/AudioFog" target="_blank">
                    <FontAwesomeIcon className="navbar-icon" icon={faGithub}/>
                  </a>
									<a className="navbar-gh-icon-parent" href="https://angel.co/u/kevin-oconnor-7" target="_blank">
                    <FontAwesomeIcon className="navbar-icon" icon={faAngellist}/>
                  </a>
									<a className="navbar-gh-icon-parent" href="https://www.linkedin.com/in/kevin-oconnor-933561216/" target="_blank">
                    <FontAwesomeIcon className="navbar-icon" icon={faLinkedin}/>
                  </a>
									<a className="logout" onClick={this.props.logout}>Log Out</a>
						</div>
					</div>
				</div>
		)}
}

export default NavBar;
