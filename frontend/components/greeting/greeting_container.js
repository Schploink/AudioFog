import { connect } from "react-redux"
import {logout} from "../../actions/session_actions"
import { openModal } from "../../actions/modal_actions"
import Greeting from "./greeting"
import {fetchAllSounds, fetchSound} from '../../actions/sound_actions'

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  sounds: Object.values(state.entities.sounds)
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchSounds: () => dispatch(fetchAllSounds())
})

export default connect(mSTP, mDTP)(Greeting)