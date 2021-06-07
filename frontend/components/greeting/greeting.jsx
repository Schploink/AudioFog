import React from 'react'
import {Link} from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal}) => {
  const sessionLinks = () => (
    <nav className="signup-login">
      <img id="mainLogo" src="/Users/schploink/Desktop/AppAcademy/FullStackProject/AF_logo_files/1/AFlogo1_horz_black.png" alt="Audiofog logo" />
      <button onClick={() => openModal('login')}>Sign in</button>
      <button onClick={() => openModal('signup')}>Create account</button>
    </nav>
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