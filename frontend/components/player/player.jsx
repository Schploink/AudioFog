import React from 'react';
import {IoPlaySkipBack} from "react-icons/io5"
import {IoPlaySkipForward} from "react-icons/io5"
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"


class Player extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      isPlaying : false
    }

    this.handlePlayPause = this.handlePlayPause.bind(this)
	}

  handlePlayPause() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }))
    if (this.state.isPlaying) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
  }


	render() {
		return (
				<div className="player-container">
          
            <audio ref={(audio) => {this.audio = audio}} src="https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3" preload="metadata">

            </audio>

            <button className="previous-track">
              <IoPlaySkipBack />
            </button>

            <button onClick={this.handlePlayPause} className="play/pause">
              { this.state.isPlaying ? <IoPause /> : <IoPlay />}
            </button>

            <button className="next-track">
              <IoPlaySkipForward />
            </button>
            
            <div className="current-time">
              0:00
            </div>

            <div className="progress-bar">
              <input type="range" />
            </div>

            <div className="time-remaining">
              5:40
            </div>
            {/* <audio controls>
              <source src="https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3" type="audio/mpeg" />
            </audio> */}
				</div>
		)}
}

export default Player;
