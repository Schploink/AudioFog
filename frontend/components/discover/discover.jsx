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
          <div className='discover-content'>
            <div>
              Trending: New Sounds in AudioFog
            </div>
          </div>
        </>
      )
    }
}

export default Discover