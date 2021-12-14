import { connect } from 'react-redux';

import CommentShow from './comment';
import { deleteComment} from '../../actions/comment_actions';




const mSTP = (state) => {
    return {
        users: state.entities.users,
        comments: state.entities.comments,
        currentUser: state.session.id,
        soundComments: Object.values(state.entities.comments)
    }
}

const mDTP = dispatch => {
    return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentShow);