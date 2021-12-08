import React from 'react'
import Link from "react-router-dom"

class CommentShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }



    render() {
      let allComments = this.props.soundComments.map((comment, idx) => {

        return (
          <div key={comment.id} className="comment-box">
              <Link to={`/users/${comment.author_id}`}>
                <img className="comment-user-photo" />
              </Link>
            <div className="name-comment-body">
              <Link to={`/users/${comment.author_id}`}>
                <div></div>
              </Link>
            </div>
          </div>
        )
      })
    }
    }

export default CommentShow