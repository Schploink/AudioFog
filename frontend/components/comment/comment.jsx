import React from 'react'
import Link from "react-router-dom"

class CommentShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
      e.preventDefault()
      this.props.deleteComment(comment.id)
    }

    render() {
      let allComments = this.props.soundComments.map((comment, idx) => {

        return (
          <div key={comment.id} className="comment-box">
              <Link to={`/users/${comment.author_id}`}>
                {/* <img 
                  className="comment-user-photo"
                  src={comment.profilePicUrl}
                /> */}
              </Link>
            <div className="name-comment-body">
              <Link 
              className="comment-name"
              to={`/users/${comment.author_id}`}>
                <div>Author</div>
              </Link>
              <div className="comment-body">
                {comment.body}
              </div>
            </div>
            {/* <button onClick={this.handleDelete(e)}>
                delete
            </button> */}
          </div>
        )
      })
      let reverseOrder = allComments.reverse()

      return (
        <div className="comment-container">
          <div className="comment-profile-pic">
            Photo
          </div>
          <div className="comment-name-body-delete">
            <div>
              <div className="comment-name">
                Author name
              </div>
              <div className="comment-body">
                comment body
              </div>
            </div>
            <div className="delete-button">
              Delete Button
            </div>
          </div>
          Hello
        </div>
      )
    }
    }

export default CommentShow