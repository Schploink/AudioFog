import React, {useState, useEffect} from 'react'
import FrontPageSongItem from './frontpage_song_item'
import {Link} from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal, fetchSounds, sounds}) => {

  useEffect(() => {
    fetchSounds
  })

  const sessionLinks = () => (
    <div className="splash">
      <div className="splash-nav">
        <img className="main-logo" src={window.audioFogLogo} alt="Audiofog logo" />
        <nav className="signup-login">
          <button 
            className="signin-button"
            onClick={() => openModal('login')}>
            Sign in
          </button>
          <button 
            className="create-button"
            onClick={() => openModal('signup')}>
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
          {/* <FrontPageSongItem /> */}
        </div>
        <img src={sounds.photo} />
        <button className="trending-button">
          Explore trending playlists
        </button>
      </div>

      {/* <div className="mobile-app-container">
        <p className="mobile-header">
          Never stop listening
        </p>
        <p className="mobile-text">
          AudioFog is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One
        </p>
      </div> */}
      {/* <div className="creators-container">
        <p className="creators-header">
          Calling all creators
        </p>
        <p className="creators-text">
          Get on AudioFog to connect with fans, share your sounds, and murk in fog. Whatcha waitin' for, hmmmm?
        </p>
        <button onClick={() => openModal('signup')} className="find-out">
          Find out more
        </button>
      </div> */}
      {/* <div className="join-container">
        <p className="join-header">
          Thanks for listening. Now join in.
        </p>
        <p className="join-text">
          Save tracks, follow artists and build playlists. All for free.
        </p>
        <button onClick={() => openModal('signup')} className="bottom-create-button">
          Create account
        </button>
      </div> */}
      {/* <footer className="footer">
        <ul className="footer-links">
          <li><a href=""> 
          LinkedIn 
          </a></li>
        </ul>
      </footer> */}
    </div>
  )

  // const personalGreeting = () => (
  //   <div className="greeting">
  //     <div>Howdy, {currentUser.username}</div>
  //     <button className="logout" onClick={logout}>Log Out</button>
  //   </div>
  // )

  return sessionLinks() 
}


export default Greeting