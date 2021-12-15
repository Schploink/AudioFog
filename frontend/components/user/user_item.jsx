import { Link } from 'react-router-dom'
import React from 'react';
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"

class UserSongItem extends React.Component {

    constructor(props) {
        super(props)

        this.updateCurrentSound = this.updateCurrentSound.bind(this)
    }

    updateCurrentSound(e) {
        e.preventDefault()

        if (this.props.currentSound === this.props.sound) {
            if (this.props.isPlaying) {
                document.getElementById('audio').pause()
                this.props.pauseSound()
            } else {
                document.getElementById('audio').play()
                this.props.playSound()
            }
        } else {
            this.props.receiveCurrentSound(this.props.sound.id)
            this.props.playSound()
            // setTimeout( () => 
            // document.getElementById('audio').play(), 200)
        }
    }

    render() {
        
        let sound = this.props.sound
        
        return (
            <div className="user-song-item">
                <img 
                className="user-song-art"
                src={sound.photoUrl} 
                />
                <div className="info-waveform">
                    <div className="play-button-title">
                        <div className="play-button-background"
                        onClick={this.updateCurrentSound}>
                            <div className="play-button">
                                {this.props.currentSound && this.props.isPlaying ? <IoPause /> : <IoPlay />}
                            </div>
                        </div>
                        <div className="user-item-artist-title">
                            <div className="user-item-artist-name">
                                {sound.artist}
                            </div>
                            <div className="user-item-sound-title">
                                {sound.description}
                            </div>
                        </div>
                    </div>
                    <img 
                    className="user-waveform" 
                    src={sound.waveUrl}
                    />
                </div>
                <div>
                    Delete Button
                </div>
            </div>
        )
    }   
}

export default UserSongItem;