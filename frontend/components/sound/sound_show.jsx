import React from 'react';
import { Link } from 'react-router-dom';

class ShowSound extends React.Component {
    constructor(props) {
        super(props)

        // this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchTrack(this.props.match.params.trackId)
    //         .fail(() => this.props.history.push("/discover"))
    // }

    // updateCurrentTrack(e) {
    //     e.preventDefault()
    //     this.props.receiveCurrentTrack(this.props.track.id)
    //     this.props.playTrack()
    // }

    render() {
      return (<div>
        This is a track!
      </div>)
    }
}

export default ShowSound;