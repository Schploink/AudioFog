import React from 'react';

class FrontPageSongItem extends React.Component {
    render() {
        let currentSound = this.props.sound;

        let coverArt = (<img className="front-page-item-art"
                    onClick={() => this.props.openModal('login')} 
                    src={currentSound.photo} />)
        
        
        return (
            <div className="front-page-song-item">
                {coverArt}

                <div onClick={() => this.props.openModal('login')}>
                    <div>Titletest</div>
                    {/* <p className="front-page-sound-title">{currentSound.description}</p> */}
                </div>

                <div onClick={() => this.props.openModal('login')}>
                    <div>Nametest</div>
                    {/* <div className="front-page-artist-name">{currentSound.artist}</div> */}
                </div>
            </div>
        )
    }   
}

export default FrontPageSongItem;