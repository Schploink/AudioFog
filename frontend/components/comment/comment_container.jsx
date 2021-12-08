import { connect } from 'react-redux';

import CommentShow from './comment';
import { deleteComment} from '../../actions/comment_actions';




const mSTP = (state) => {
    return {
      soundComments: Object.values(state.entities.comments)
    }
}

const mDTP = dispatch => {
    return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentShow);