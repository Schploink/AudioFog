
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_ALL_COMMENTS} from '../actions/comment_actions'

import { RECEIVE_SOUND } from '../actions/sound_actions'

const CommentsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        
        case RECEIVE_ALL_COMMENTS:
            debugger
            return action.comments

        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;

        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;

        case RECEIVE_SOUND:
            return Object.assign({}, action.track.comments);

        default:
            return oldState;
    }
}

export default CommentsReducer;