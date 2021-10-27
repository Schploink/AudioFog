import { connect } from "react-redux"
import {logout} from "../../actions/session_actions"
import Player from "./player"
import {fetchAllSounds} from '../../actions/sound_actions'

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  sounds: Object.values(state.entities.sounds)
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSounds: () => dispatch(fetchAllSounds())
})

export default connect(mSTP, mDTP)(Player)