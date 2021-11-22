import React from 'react';
import {IoPlaySkipBack} from "react-icons/io5"
import {IoPlaySkipForward} from "react-icons/io5"
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"


class Player extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      isPlaying : false,
      currentTime : 0,
      duration: 0
    }

    this.handlePlayPause = this.handlePlayPause.bind(this)
    this.changeRange = this.changeRange.bind(this)
	}

  componentDidMount() {
    this.slider.value = 0
    this.currentTimeInterval = null
    

    this.audio.onloadedmetadata = function() {
      this.setState({duration: this.audio.duration})
    }.bind(this)

    this.audio.onplay = () => {
      this.currentTimeInterval = setInterval( () => {
        this.slider.value = this.audio.currentTime
        this.setState({currentTime: this.audio.currentTime})
      }, 200)
    }

    this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};

    this.slider.onchange = (e) => {
      clearInterval(this.currentTimeInterval)
      this.audio.currentTime = e.target.value
      // this.setState({currentTime: this.audio.currentTime})
      // setInterval( () => {
      //   this.setState({currentTime: this.audio.currentTime})
      // }, 200)
    }
  }

  handlePlayPause() {
    if (this.props.isPlaying) {
      console.log(this.props.isPlaying)
      this.props.pauseSound
      this.audio.pause()
    } else {
      console.log(this.props.isPlaying)
      this.props.playSound
      this.audio.play()
    }
  }

  changeRange(e) {
    e.preventDefault()
    clearInterval(this.currentTimeInterval)
    this.slider.value = e.target.value
    this.setState({currentTime: e.target.value})
    this.slider.style.setProperty('--seek-before-width', `${this.slider.value / this.state.duration * 100}%`)
  }



	render() {
    const normalizeTime = (sec) => {
      const minutes = Math.floor(sec / 60)
      const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
      const seconds = Math.floor(sec % 60)
      const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

      return `${displayMinutes}:${displaySeconds}`
    }

		return (
				<div className="player-container">
          <div className="player-controls">
            <audio ref={(audio) => {this.audio = audio}} src="https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3" preload="metadata">

            </audio>

            <button className="previous-track">
              <IoPlaySkipBack />
            </button>

            <button onClick={this.handlePlayPause} className="play-pause">
              { this.props.isPlaying ? <IoPause /> : <IoPlay />}
            </button>

            <button className="next-track">
              <IoPlaySkipForward />
            </button>
            
            <div className="current-time">
              {normalizeTime(this.state.currentTime)}
            </div>

            <div className="progress-bar-container">
              <input 
              ref={(slider) => {this.slider = slider}} 
              type="range"
              className="progress-bar"
              onInput={this.changeRange}
              min="0"
              max={this.state.duration} />
            </div>

            <div className="time-remaining">
              {normalizeTime(this.state.duration)}
            </div>
            {/* <audio controls>
              <source src="https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3" type="audio/mpeg" />
            </audio> */}
            <div>
              Song/Artist info
            </div>
            
          </div>
				</div>
		)}
}

export default Player;
