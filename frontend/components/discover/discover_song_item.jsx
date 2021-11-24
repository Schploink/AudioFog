import { Link } from 'react-router-dom'
import React from 'react';
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"

class DiscoverSongItem extends React.Component {

    constructor(props) {
        super(props)

        this.updateCurrentSound = this.updateCurrentSound.bind(this)
    }

    updateCurrentSound(e) {
        e.preventDefault()

        if (this.props.currentSound === this.props.sound) {
            if (this.props.isPlaying) {
                // this.audio.pause()
                this.props.pauseSound()
            } else {
                // this.audio.play()
                this.props.playSound()
            }
        } else {
            this.props.receiveCurrentSound(this.props.sound.id)
            this.props.playSound()
        }
    }

    render() {
        let currentSound = this.props.sound;

        let coverArt = (<img className="discover-item-art"
                    src={currentSound.photoUrl} />)
        
        return (
            <div className="discover-song-item">
                {coverArt}
                <div className="discover-play-pause" onClick={this.updateCurrentSound}>
                { this.props.currentSound === this.props.sound && this.props.isPlaying ? <IoPause /> : <IoPlay />}

                </div>

                <Link to={`/sounds/${currentSound.id}`}>
                    <div className="discover-sound-title">{currentSound.description}</div>
                </Link>

                <Link to={`/users/${currentSound.uploader_id}`}>
                    <div className="discover-artist-name">{currentSound.artist}</div>
                </Link>
            </div>
        )
    }   
}

export default DiscoverSongItem;