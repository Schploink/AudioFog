import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../navbar/navbar_container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'

class User extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchSounds()
    // debugger
    console.log("hello")
    this.props.fetchUser(this.props.match.params.userId)
    
    //   .fail(() => this.props.history.push("/discover"))
  }
  
  render () {
    let user = this.props.showUser
    // debugger
    // let userSounds = this.props.sounds

    return (
      <div>
        <Navbar />
        <div className="discover-background">
          <div className="discover-content">
            <div className="user-top">
              <img className="user-pic" src={user.profilePicUrl} />
              <div className="user-name">
                <span className="name-text">
                  {user.username}
                </span>
              </div>
            </div>
            <div className="user-bottom">
              <div className="user-bottom-left">
                <div className="spotlight-text">
                Spotlight
                </div>
                Song image
                play/pause button
                song name/artist
                waveform
              </div>
              <div className="user-bottom-right">
                <a className="navbar-gh-icon-parent" href="https://github.com/Schploink/AudioFog" target="_blank">
                    <FontAwesomeIcon className="navbar-icon" icon={faGithub}/>
                  </a>
									<a className="navbar-gh-icon-parent" href="https://angel.co/u/kevin-oconnor-7" target="_blank">
                    <FontAwesomeIcon className="navbar-icon" icon={faAngellist}/>
                  </a>
									<a className="navbar-gh-icon-parent" href="https://www.linkedin.com/in/kevin-oconnor-933561216/" target="_blank">
                    <FontAwesomeIcon className="navbar-icon" icon={faLinkedin}/>
                  </a>
                  language
              </div>
            </div>
          </div>
        </div>
      </div>
    )


  }

}

export default User