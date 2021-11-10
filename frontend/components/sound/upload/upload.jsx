import React from "react"
import Navbar from "../../navbar/navbar_container"

class Upload extends React.Component {
    
    constructor (props){
      super(props)
    }

    
    render () {
      return (
        <>
          <Navbar />
          <div className='upload-background'>
            <div className='upload-content'>
              <div className='upload-text'>
                Upload
              </div>
              <div className='upload-form'>
                <label className="upload-sound">
                  Add Audio File
                  <input className="current-sound" type="file" />
                </label>
                <label className="upload-photo">
                  Add Photo Art
                  <input className="current-photo" type="file" />
                </label>
                <label>
                  Sound Title:
                  <input type="text" />
                </label>
                <button>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default Upload