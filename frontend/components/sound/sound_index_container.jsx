import { connect } from 'react-redux';
import { fetchAllSounds } from '../../actions/sound_actions';
import { fetchUsers } from '../../actions/user_actions'
import SoundIndex from './sound_index'
import { openModal } from '../../actions/modal_actions';

const mSTP = ({session, entities: { users }, entities}) => ({
  currentUser: users[session.id],
  sounds: Object.values(entities.sounds),
  users: entities.users
})

const mDTP = dispatch => ({
  fetchSounds: () => dispatch(fetchAllSounds()),
  fetchUsers: () => dispatch(fetchUsers()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(SoundIndex)