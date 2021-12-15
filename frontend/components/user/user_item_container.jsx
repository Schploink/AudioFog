import { connect } from 'react-redux';
import UserItem from './user_item'
import { fetchAllSounds, destroySound } from '../../actions/sound_actions';
import {receiveCurrentSound, playSound, pauseSound} from "../../actions/playstate_actions"

const mapStateToProps = (state) => ({
  sounds: Object.values(state.entities.sounds),
  currentSound: state.entities.sounds[state.ui.currentSound.id],
  currentUser: state.session.id,
  users: state.entities.users,
  isPlaying: state.ui.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllSounds: () => dispatch(fetchAllSounds()),
  deleteSound: (soundID) => dispatch(destroySound(soundID)),
  playSound: () => dispatch(playSound()),
  pauseSound: () => dispatch(pauseSound()),
  receiveCurrentSound: (soundID) => dispatch(receiveCurrentSound(soundID))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);