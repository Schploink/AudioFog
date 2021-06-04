import React from 'react'
import {Link} from 'react-router-dom'

const Greeting = ({ currentUser, logout, openModal}) => {
  const sessionLinks = () => (
    <nav className="signup-login">
      <button onClick={() => openModal('login')}>Login</button>
      <button onClick={() => openModal('signup')}>Signup</button>
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