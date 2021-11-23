import { connect } from 'react-redux';
import Discover from './discover'
import { fetchAllSounds } from '../../actions/sound_actions';
import {receiveCurrentSound, playSound, pauseSound} from "../../actions/playstate_actions"

const mapStateToProps = (state) => ({
  sounds: Object.values(state.entities.sounds),
  currentSound: state.entities.sounds[state.ui.currentSound.id],
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users,
  isPlaying: state.ui.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllSounds: () => dispatch(fetchAllSounds()),
  playSound: () => dispatch(playSound()),
  pauseSound: () => dispatch(pauseSound()),
  receiveCurrentSound: (soundID) => dispatch(receiveCurrentSound(soundID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);