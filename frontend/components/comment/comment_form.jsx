import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            soundId: this.props.soundId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    update(field) {
      return e => {
        this.setState({ [field]: e.target.value })
      }
    }

    handleSubmit(e) {
      e.preventDefault()
      console.log(this.props)
      if (this.state.body.length > 0) {
        this.props.createComment(this.state)
          .then(() => this.props.fetchSound(this.props.soundId))
          .then(() => {
            this.setState({
              body: '',
              soundId: this.props.soundId
            })
          })
      }
    }

    render() {
      let submit = this.handleSubmit
      document.onkeydown = function(e) {
        if (e.keyCode === 13) {
          submit(e)
        }
      }

      return (
        <div className='comment-bar'>
          <input 
            className="comment-input"
            type="text" 
            placeholder="Condense your thoughts"
            value={this.state.body}
            onChange={this.update('body')}
          />
        </div>
      )
    }
  }

  export default CommentForm