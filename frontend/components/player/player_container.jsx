import { connect } from "react-redux"
import {logout} from "../../actions/session_actions"
import Player from "./player"
import {fetchAllSounds} from '../../actions/sound_actions'
import {receiveCurrentSound, playSound, pauseSound} from "../../actions/playstate_actions"

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  sounds: Object.values(state.entities.sounds),
  isPlaying: state.ui.isPlaying
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSounds: () => dispatch(fetchAllSounds()),
  playSound: () => dispatch(playSound()),
  pauseSound: () => dispatch(pauseSound()),
  receiveCurrentSound: (soundID) => dispatch(receiveCurrentSound(soundID))
})

export default connect(mSTP, mDTP)(Player)