import React from 'react'
import { render } from 'react-dom'
import {withRouter} from 'react-router-dom'

class SoundItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    const soundId = this.props.sound.id
    this.props.history.push(`/sound/${soundId}`)
  }
  
  render() {
    return (
      <div
      className="sound-item"
      onClick={this.handleClick}
      >
      <div className='sound-item-info'>
        <span className="artist-name">this.props.sound.uploader_id?</span>
        <span className="sound-title">this.props.sound.title?</span>
      </div>
      <img src={this.props.sound.photo}/>
    </div>
  )
}
}