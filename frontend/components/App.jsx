import React from 'react'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'
import GreetingContainer from "./greeting/greeting_container"
import Modal from "./modal/modal"
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => {
  return (
    <div>
      <Modal />
      <header>
      <GreetingContainer />
      </header>

      <Redirect from="*" to="/" />
    </div>
  )
}

{/* <Route path="/login" component={LoginFormContainer} />
<Route path="/signup" component={SignupFormContainer} /> */}

export default App