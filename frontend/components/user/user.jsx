import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../navbar/navbar_container"

class User extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchSounds()
    this.props.fetchUser(this.props.match.params.userId)
    //   .fail(() => this.props.history.push("/discover"))
  }
  
  render () {
    let user = this.props.showUser
    // let userSounds = this.props.sounds

    return (
      <div>
        <Navbar />
        <div className="discover-background">
          <div className="discover-content">
            <div className="user-top">
              <img className="user-pic" src={user.profilePicURL} />
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
                links/language
              </div>
            </div>
          </div>
        </div>
      </div>
    )


  }

}

export default User