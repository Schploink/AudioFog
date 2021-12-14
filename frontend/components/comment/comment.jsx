import React from 'react'
import { Link } from "react-router-dom"
import {RiDeleteBin7Line} from "react-icons/ri"

class CommentShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {

      this.props.deleteComment(this.props.comments[comment.id])
    }

    render() {
      let allComments = this.props.soundComments.map((comment, idx) => {
        
        const deleteButton = comment.author_id === this.props.currentUser 
        ? <RiDeleteBin7Line 
        className="comment-delete-button"
        onClick={() => this.props.deleteComment(comment.id)}/>
        : <div></div>

        return (
          <div key={comment.id} className="comment-box">
              <Link to={`/users/${comment.author_id}`}>
                <img 
                  className="comment-user-photo"
                  src={this.props.users[comment.author_id].profilePicURL}
                />
              </Link>
            <div className="name-comment-body-delete">
              <div className="comment-name-body">
                <Link 
                className="comment-name"
                to={`/users/${comment.author_id}`}>
                  <div>{this.props.users[comment.author_id].username}</div>
                </Link>
                <div className="comment-body">
                  {comment.body}
                </div>
              </div>
            </div>
            {deleteButton}
          </div>
        )
      })
      let reverseOrder = allComments.reverse()

      return (
        <div className="comment-container">
          {this.props.soundComments.length < 1 
          ? <div className="no-comments"> Be the first to comment on this sound </div> 
          : reverseOrder}
        </div>
      )
    }
    }

export default CommentShow