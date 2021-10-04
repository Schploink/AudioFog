import React from 'react'
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import GreetingContainer from "./greeting/greeting_container"
import Modal from "./modal/modal"
import Discover from "./discover/discover_container"
import NavBar from "./navbar/navbar"

import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => {
  return (
    <div>
      <Modal />
      <GreetingContainer />      
      <NavBar />
      <AuthRoute exact path="/" component={GreetingContainer} />
      {/* <Discover /> */}
    </div>
  )
}

{/* <Route path="/login" component={LoginFormContainer} />
<Route path="/signup" component={SignupFormContainer} /> */}

export default App