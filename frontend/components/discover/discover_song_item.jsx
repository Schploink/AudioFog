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
                document.getElementById('audio').pause()
                this.props.pauseSound()
            } else {
                document.getElementById('audio').play()
                this.props.playSound()
            }
        } else {
            this.props.receiveCurrentSound(this.props.sound.id)
            this.props.playSound()
            // document.getElementById('audio').play()
        }
    }

    render() {
        let currentSound = this.props.sound;

        let coverArt = (<img className="discover-item-art"
                    src={currentSound.photoUrl} />)
        
        return (
            <div className="discover-song-item">
                <div className="discover-art-button">
                    <div className="discover-art">
                        {coverArt}
                    </div>
                    <div className="discover-play-pause" onClick={this.updateCurrentSound}>
                        <div className="discover-icon">
                            { this.props.currentSound === this.props.sound && this.props.isPlaying ? <IoPause /> : <IoPlay />}
                        </div>
                    </div>
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