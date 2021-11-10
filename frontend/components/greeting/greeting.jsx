import React, {useState, useEffect} from 'react'
import FrontPageSongItem from './frontpage_song_item'
import {Link} from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

componentDidMount (){
  this.props.fetchSounds()
}

render () {

  debugger
  const allSounds = this.props.sounds.map((sound, i) => {
    return (
      <FrontPageSongItem 
        key={sound.id}
        sound={sound}
        idx={i}
        openModal={this.props.openModal}
      />
    )
  })
  debugger

  return (
    <div className="splash">
      <div className="splash-nav">
        <img className="main-logo" src={window.audioFogLogo} alt="Audiofog logo" />
        <nav className="signup-login">
          <button 
            className="signin-button"
            onClick={() => this.props.openModal('login')}>
            Sign in
          </button>
          <button 
            className="create-button"
            onClick={() => this.props.openModal('signup')}>
            Create account
          </button>
          <button
            className="creators-button">
            For Creators
          </button>
        </nav>
        <div className="main-image-text">
          <p className="image-text-header">
            What's next in music poured out of AudioFog
          </p>
          <p className="image-text">
            Upload your first sound and begin your journey into the fog. AudioFog gives you space to create, find your fans, and connect with other artists.
          </p>
          <button className="uploading-button">
            Start uploading today
          </button>
        </div>
      </div>
      <div className="trending-container">
        <p className="trending-text">
          Hear what's creeping in AudioFog
        </p>
        <div className="sounds-container">
          {allSounds[1]}
        </div>
        {/* <img src={sounds.photo} /> */}
        <button className="trending-button">
          Explore trending playlists
        </button>
      </div>
    </div>  
  )
  
}
}


export default Greeting