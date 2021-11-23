import {
    RECEIVE_CURRENT_SOUND
} from '../../actions/playstate_actions';

const defaultState = {
    id: null
}

const currentTrackReducer = (oldState = defaultState, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_SOUND:
            return { id: action.currentSoundId }
    
        default:
            return oldState;
    }
}

export default currentTrackReducer;