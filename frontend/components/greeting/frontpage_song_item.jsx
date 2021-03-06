import React from 'react';

class FrontPageSongItem extends React.Component {
    render() {
        let currentSound = this.props.sound;

        let coverArt = (<img className="front-page-item-art"
                    onClick={() => this.props.openModal('login')} 
                    src={currentSound.photoUrl} />)
        
        return (
            <div className="front-page-song-item">
                {coverArt}

                <div onClick={() => this.props.openModal('login')}>
                    <div className="front-page-sound-title">{currentSound.description}</div>
                </div>

                <div onClick={() => this.props.openModal('login')}>
                    <div className="front-page-artist-name">{currentSound.artist}</div>
                </div>
            </div>
        )
    }   
}

export default FrontPageSongItem;