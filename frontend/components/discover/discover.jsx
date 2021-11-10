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
              <h2 className='trend-text'>
                Trending:
              </h2>
              <div>
                New sounds in AudioFog:
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