import React from "react"
import Navbar from "../navbar/navbar_container"
import DiscoverSongItem from "./discover_song_item"

class Discover extends React.Component {
    
    constructor (props){
      super(props)
    }

    componentDidMount() {
        this.props.fetchAllSounds()
    }

    render () {

    const allSounds = this.props.sounds.map((sound, i) => {
      return (
        <DiscoverSongItem 
          key={sound.id}
          sound={sound}
          idx={i}
          playSound={this.props.playSound}
          pauseSound={this.props.pauseSound}
          currentSound={this.props.currentSound}
          isPlaying={this.props.isPlaying}
          receiveCurrentSound={this.props.receiveCurrentSound}
        />
      )
    })

    const displayFirstSounds = allSounds.filter((sound, i) => i > 9)
    const displayNewSounds = allSounds.filter((sound, i) => i < 8)

      return (
        <>
          <Navbar />
          <div className='discover-background'>
            <div className='discover-content'>
              <div className='trend-text'>
                Trending
              </div>
              <div>
                {displayFirstSounds}
              </div>
              <div className='new-sounds-text'>
                New Sounds
              </div>
              <div>
                {displayNewSounds}
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default Discover