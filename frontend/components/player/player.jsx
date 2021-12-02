import React from 'react';
import {IoPlaySkipBack} from "react-icons/io5"
import {IoPlaySkipForward} from "react-icons/io5"
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"
import {IoVolumeHigh} from "react-icons/io5"
import { Link } from "react-router-dom"

class Player extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      isPlaying : false,
      currentTime : 0,
      duration: 0,
      volume: 0.1,
    }

    this.handlePlayPause = this.handlePlayPause.bind(this)
    this.changeRange = this.changeRange.bind(this)
    this.volumeChange = this.volumeChange.bind(this)
    this.photoError = this.photoError.bind(this)
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

  restartSound() {

  }

  nextSound() {

  }

  volumeChange(e) {
    this.audio.volume = e.target.value / 1000.0
    this.setState({ volume: e.target.value / 1000.0 })
  }
  
  handlePlayPause() {
    if (this.props.isPlaying) {
      this.props.pauseSound()
      this.audio.pause()
    } else {
      this.props.playSound()
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

  photoError() {
    return "this.style.display='none'"
  }

	render() {
    const normalizeTime = (sec) => {
      const minutes = Math.floor(sec / 60)
      const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
      const seconds = Math.floor(sec % 60)
      const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

      return `${displayMinutes}:${displaySeconds}`
    }

    const albumArt = this.props.currentSound ? this.props.currentSound.photoUrl : ""
    const artistName = this.props.currentSound ? this.props.currentSound.artist : ""
    const soundName = this.props.currentSound ? this.props.currentSound.description : ""
    const soundId = this.props.currentSound ? this.props.currentSound.id : "1"
    const artistId = this.props.currentSound ? this.props.currentSound.uploader_id : "1"

		return (
				<div className="player-container">
          <div className="player-controls">
            <audio id="audio" 
              ref={(audio) => {this.audio = audio}} 
              src={this.props.currentSound ? this.props.currentSound.soundUrl : ""} 
              preload="metadata">

            </audio>

            <button className="previous-track" onClick={this.restartSound()}>
              <IoPlaySkipBack />
            </button>

            <button onClick={this.handlePlayPause} className="play-pause">
              { this.props.isPlaying ? <IoPause /> : <IoPlay />}
            </button>

            <button className="next-track" onClick={this.nextSound()}>
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
            <div className="volume-container">
              <IoVolumeHigh className="volume-icon"/>
              <input 
                type="range"
                className="volume-bar"
                min="0.0"
                max="1000.0"
                defaultValue={this.state.volume * 1000}
                onChange={this.volumeChange}
              />
            </div>
            <div className="player-track-container">
              <div className="player-art-container">
                  {/* <object data={window.audioFogLogo} className="player-song-art" type="image/jpg">
                    <img src={albumArt} className="player-song-art"/>
                  </object> */}
                  <img src={albumArt} className="player-song-art" onError={this.photoError()} />
              </div>
              <div className="song-artist-title">
                <Link to={`/users/${artistId}`}>
                  <div className="player-artist">{artistName}</div>
                </Link>
                <Link to={`/sounds/${soundId}`}>
                  <div className="player-song-title">{soundName}</div>
                </Link>
              </div>
            </div>
            
          </div>
				</div>
		)}
}

export default Player;
