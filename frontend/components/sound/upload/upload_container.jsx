
import { connect } from 'react-redux';
import Upload from './upload'
import { createSound } from '../../../actions/sound_actions';
import { logout } from "../../../actions/session_actions"

const mapStateToProps = (state) => ({
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  sounds: state.entities.sounds,
});

const mapDispatchToProps = (dispatch) => ({
  createSound: (sound) => dispatch(createSound(sound))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);