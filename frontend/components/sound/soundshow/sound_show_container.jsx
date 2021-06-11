import { connect } from 'react-redux';
import { fetchSound } from '../../../actions/sound_actions';
import { fetchUsers } from '../../../actions/user_actions'
import SoundIndex from './sound_index'

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  sound: state.entities.sounds[ownProps.match.params.soundId]
})

const mDTP = dispatch => ({
  fetchSound: soundId => dispatch(fetchSound(soundId)),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(SoundIndex)