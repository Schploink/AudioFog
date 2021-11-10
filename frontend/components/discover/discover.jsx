import React from "react"
import Navbar from "../navbar/navbar_container"

class Discover extends React.Component {
    
    constructor (props){
      super(props)
    }

    render () {
      return (
        <>
          <Navbar />
          <div className='discover-background'>
            <div className='discover-content'>
              <div className='trend-text'>
                Trending
              </div>
              <div>
                Trending Sounds
              </div>
              <div className='new-sounds-text'>
                New Sounds
              </div>
              <div>
                Sound items
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default Discover