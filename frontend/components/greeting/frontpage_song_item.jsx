import React from 'react';

class FrontPageSongItem extends React.Component {
    render() {
        let currentSound = this.props.sound;

        let currentCover = (<img className="front-page-item-art"
                    onClick={() => this.props.openModal('login')} 
                    src={currentSound.imageURL} />)
        
        
        return (
            <div className="front-page-song-item">
                {currentCover}

                <div onClick={() => this.props.openModal('login')}>
                    <p className="front-page-sound-title">{currentSound.title}</p>
                </div>

                <div onClick={() => this.props.openModal('login')}>
                    <div className="front-page-artist-name">{currentSound.creator}</div>
                </div>
            </div>
        )
    }   
}

export default FrontPageSongItem;