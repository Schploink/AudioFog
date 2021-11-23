import { Link } from 'react-router-dom'
import React from 'react';

class DiscoverSongItem extends React.Component {

    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
    }

    updateCurrentTrack(e) {
        e.preventDefault()
    }

    render() {
        let currentSound = this.props.sound;

        let coverArt = (<img className="discover-item-art"
                    src={currentSound.photoUrl} />)
        
        return (
            <div className="discover-song-item">
                {coverArt}

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