import { connect } from 'react-redux';
import ShowSound from "./sound_show";
import { fetchSound, fetchAllSounds, deleteSound } from '../../actions/sound_actions';
import { receiveCurrentSound, playSound, pauseSound } from '../../actions/playstate_actions';

const mSTP = (state, ownProps) => {
    return {
        pageSound: state.entities.sounds[ownProps.match.params.soundId],
        // currentUser: state.entities.users[state.session.id],
        // currentSound: state.entities.sounds[state.ui.currentSound.id],
        isPlaying: state.ui.isPlaying,
    }
}

const mDTP = dispatch => {
    return {
        fetchSound: soundId => dispatch(fetchSound(soundId)),
        fetchSounds: () => dispatch(fetchAllSounds()),
        receiveCurrentSound: soundId => dispatch(receiveCurrentSound(soundId)),
        playSound: () => dispatch(playSound()),
        pauseSound: () => dispatch(pauseSound()),
        deleteSound: soundId => dispatch(deleteSound(soundId))
    }
}

export default connect(mSTP, mDTP)(ShowSound);