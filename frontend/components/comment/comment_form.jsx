import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            sound_id: this.props.soundId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //   this.props.fetchComments()
    // }

    update(field) {
      return e => {
        this.setState({ [field]: e.target.value })
      }
    }

    handleSubmit(e) {
      console.log(this.state)
      e.preventDefault()
      if (this.state.body.length > 0) {
        this.props.createComment(this.state)
          .then(() => {
            this.setState({
              body: '',
              sound_id: this.props.soundId
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
            placeholder="Condense your thoughts on this sound"
            value={this.state.body}
            onChange={this.update('body')}
          />
          {/* <button
          onClick={this.handleSubmit(this.state)}>
            Submit
          </button> */}
        </div>
      )
    }
  }

  export default CommentForm