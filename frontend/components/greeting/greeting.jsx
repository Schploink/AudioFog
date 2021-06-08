import React from 'react'
import {Link} from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal}) => {
  const sessionLinks = () => (
    <div className="splash">
      <div className="splash-nav">
        <nav className="signup-login">
          <img id="mainLogo" src="/Users/schploink/Desktop/AppAcademy/FullStackProject/AF_logo_files/1/AFlogo1_horz_black.png" alt="Audiofog logo" />
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
          <p className="image-text-header">What's next in music poured out of AudioFog</p>
          <p className="image-text">Upload your first sound and begin your journey into the fog. AudioFog gives you space to create, find your fans, and connect with other artists.</p>
          <button className="uploading-button">Start uploading today</button>
        </div>
      </div>
      <div className="trending-container">
        <p className="trending-text">Hear what's creeping in AudioFog</p>
        <div className="sounds-container">
          Sounds here
        </div>
        
      </div>

    </div>
  )

  const personalGreeting = () => (
    <div className="greeting">
      <div>Howdy, {currentUser.username}</div>
      <button className="logout" onClick={logout}>Log Out</button>
    </div>
  )

  return currentUser ? personalGreeting() : sessionLinks()
}

export default Greeting