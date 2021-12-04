import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../navbar/navbar_container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'

class User extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      user: this.props.fetchUser(this.props.match.params.userId)
    }
  }

  componentDidMount() {
    // this.props.fetchSounds()
    this.props.fetchUser(this.props.match.params.userId)
      .fail(() => this.props.history.push("/discover"))
  }

  // componentDidUpdate() {
  //   this.props.fetchUser(this.props.match.params.userId)
  //     .then(console.log(this.props))
  // }
  
  render () {
    // console.log(grabUser)
    let user = this.props.showUser
    // let userPic = user ? user.profilePicUrl : ""
    let userPic = user ? user.profilePicURL : "https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/tumblr_o12glwV45e1qagjnzo1_640.jpg"
    let userName = user ? user.username : ""
    // let userSounds = this.props.sounds

    return (
      <div>
        <Navbar />
        <div className="discover-background">
          <div className="discover-content">
            <div className="user-top">
              <img className="user-pic" src={userPic} />
              <div className="user-name">
                <span className="name-text">
                  {userName}
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