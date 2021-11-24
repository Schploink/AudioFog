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
            {user.username}

          </div>
        </div>
      </div>
    )


  }

}

export default User