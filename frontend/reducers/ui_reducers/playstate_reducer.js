import { PLAY_SOUND, PAUSE_SOUND } from '../../actions/playstate_actions'

const defaultState = false

const playstateReducer = (oldState = defaultState, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case PLAY_SOUND:
            return true;
        case PAUSE_SOUND:
            return false;
        default:
            return oldState;
    }
}

export default playstateReducer;