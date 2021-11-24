import React from 'react';
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar_container"

class ShowSound extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentSound = this.updateCurrentSound.bind(this)
    }

    componentDidMount() {
        this.props.fetchSounds()
        // this.props.fetchSound(this.props.match.params.soundId)
        //     .fail(() => this.props.history.push("/discover"))
    }

    updateCurrentSound(e) {
        e.preventDefault()
        this.props.receiveCurrentSound(this.props.sound.id)
        this.props.playSound()
    }

    render() {
      let sound = this.props.pageSound

      return (
      <div>
        <Navbar />
        <div className="discover-background">
          <div className="discover-content">
            <div className="show-sound-top">
              <div className="show-left-box">
                <div className="top-left-box">
                  <div className="show-play-background">
                      { this.props.currentSound === this.props.sound && this.props.isPlaying ? <IoPause /> : <IoPlay />}
                  </div>
                  <div className="title-artist">
                    <Link to={`/users/${sound.uploader_id}`}
                      className="show-sound-artist">
                      <span className="artist-name">
                        {sound.artist}
                      </span>
                    </ Link>
                    <div className="show-song-title"> 
                      {sound.description}
                    </div>
                  </div>
                </div>
                <div>Playbar tracker w/waveform</div>
              </div>
              <img className="show-page-item-art"
                src={sound.photoUrl} />
            </div> 
            <div className="show-sound-bottom">
              <div className="show-sound-bottom-left">
                <div>Comment input</div>
                <div>User profile pic</div>
                <div>Username</div>
                <div>number of comments</div>
                <div>comment list</div>
              </div>
              <div className="show-sound-bottom-right">
                <div>githublinkedinangellist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
}

export default ShowSound;