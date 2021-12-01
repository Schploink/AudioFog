import { connect } from 'react-redux';
import User from './user';
import { fetchAllSounds } from '../../actions/sound_actions';
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        showUser: state.entities.users[ownProps.match.params.userId],
        sounds: Object.values(state.entities.sounds)
    }
}

const mDTP = dispatch => {
    return {
        fetchSounds: () => dispatch(fetchAllSounds()),
        fetchUser: userId => dispatch(fetchUser(userId)),
    }
}

export default connect(mSTP, mDTP)(User);