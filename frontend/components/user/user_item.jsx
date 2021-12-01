import React from 'react'
import { render } from 'react-dom'
import {IoPlay} from "react-icons/io5"
import {IoPause} from "react-icons/io5"

class UserItem extends React.Component {
  constructor(props) {
    super(props)

  }
  
  render() {
    return (
      <div className="user-song-item">
    
        <div className="user-song-photo">
            <Link to={`/sounds/${sound.id}`}>
                <img className="user-song-art" src={sound.photoUrl}/>
            </Link>
        </div>

        <div className="user-song-body">
            <div className="user-">
                {playPauseButton}

                <div className="indiv-track-right-top-rightside">

                    <Link to={`/tracks/${track.id}`}>
                        <div className="track-rightside-track-title">
                            {sound.description}
                        </div>
                    </Link>
                </div>
            </div>
        </div>    
    </div>
  )}
}
  