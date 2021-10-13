
import { connect } from 'react-redux';
import Discover from './discover'
import { fetchAllSounds } from '../../actions/sound_actions';
import { logout } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
  sounds: state.entities.sounds,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllSounds: () => dispatch(fetchAllSounds()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);