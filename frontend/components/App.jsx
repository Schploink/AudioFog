import React from 'react'
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import GreetingContainer from "./greeting/greeting_container"
import Modal from "./modal/modal"
import Discover from "./discover/discover_container"
import Upload from "./sound/upload/upload_container"
import Player from "./player/player_container"
import Sound from './sound/sound_show_container'
// import User from "./user/user_container"

import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => {
  return (
    <div>
      <Modal />     
      <ProtectedRoute exact path="/discover" component={Discover} />
      <ProtectedRoute exact path="/upload" component={Upload} />
      <ProtectedRoute exact path="/sounds/:soundId"  component={Sound} />
      {/* <ProtectedRoute exact path="/users/:userId" component={User} /> */}
      <AuthRoute exact path="/" component={GreetingContainer} />
      <Player />
    </div>
  )
}

{/* <Route path="/login" component={LoginFormContainer} />
<Route path="/signup" component={SignupFormContainer} /> */}

export default App