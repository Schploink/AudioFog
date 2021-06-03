import React from 'react'
import {Link} from 'react-router-dom'

const Greeting = ({ currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="signup-login">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up!</Link>
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