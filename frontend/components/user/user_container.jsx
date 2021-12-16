import { connect } from 'react-redux';
import User from './user';
import { fetchAllSounds } from '../../actions/sound_actions';
import { fetchUser } from '../../actions/user_actions'
import {receiveCurrentSound, playSound, pauseSound} from "../../actions/playstate_actions"

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentSound: state.ui.currentSound.id,
        showUser: state.entities.users[ownProps.match.params.userId],
        sounds: Object.values(state.entities.sounds),
        isPlaying: state.ui.isPlaying
    }
}

const mDTP = dispatch => {
    return {
        fetchSounds: () => dispatch(fetchAllSounds()),
        fetchUser: userId => dispatch(fetchUser(userId)),
        playSound: () => dispatch(playSound()),
        pauseSound: () => dispatch(pauseSound()),
        receiveCurrentSound: (soundID) => dispatch(receiveCurrentSound(soundID))
    }
}

export default connect(mSTP, mDTP)(User);