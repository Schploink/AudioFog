import React from 'react';


class Player extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
				<div className="player-container">
          Thisistheplayer
        <audio src="https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3" preload="metadata">

        </audio>
        <button>
          play/pause
        </button>
        {/* current time */}
        <div>
          0:00
        </div>

        {/* progress bar */}
        <div>
          <input type="range" />
        </div>

        {/* duration */}
        <div>
          5:40
        </div>
        
          {/* <audio controls>
            <source src="https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3" type="audio/mpeg" />
          </audio> */}
				</div>
		)}
}

export default Player;
