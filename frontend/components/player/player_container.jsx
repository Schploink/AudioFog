import { connect } from "react-redux"
import Player from "./player"
import {fetchAllSounds} from '../../actions/sound_actions'
import {receiveCurrentSound, playSound, pauseSound} from "../../actions/playstate_actions"

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  currentSound: state.entities.sounds[state.ui.currentSound.id],
  sounds: Object.values(state.entities.sounds),
  isPlaying: state.ui.isPlaying
})

const mDTP = dispatch => ({
  fetchSounds: () => dispatch(fetchAllSounds()),
  playSound: () => dispatch(playSound()),
  pauseSound: () => dispatch(pauseSound()),
  receiveCurrentSound: (soundID) => dispatch(receiveCurrentSound(soundID))
})

export default connect(mSTP, mDTP)(Player)