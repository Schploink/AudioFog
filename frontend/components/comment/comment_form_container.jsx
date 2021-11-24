import { connect } from 'react-redux';

import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { fetchSound } from '../../actions/sound_actions';



const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments,
        soundId: ownProps.soundId,
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        fetchSound: soundId => dispatch(fetchSound(soundId)),
    }
}

export default connect(mSTP, mDTP)(CommentForm);