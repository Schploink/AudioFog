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
                    onClick={() => this.props.openModal('login')} 
                    src={currentSound.photoUrl} />)
        
        return (
            <div className="discover-song-item">
                {coverArt}

                <div onClick={() => this.props.openModal('login')}>
                    <div className="discover-sound-title">{currentSound.description}</div>
                </div>

                <div onClick={() => this.props.openModal('login')}>
                    <div className="discover-artist-name">{currentSound.artist}</div>
                </div>
            </div>
        )
    }   
}

export default DiscoverSongItem;