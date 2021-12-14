import React from "react"
import Navbar from "../../navbar/navbar_container"

class Upload extends React.Component {
    
    constructor (props){
      super(props)

      this.state = {  
        title: "",
        albumArt: null,
        audioFile: null,
        imagePreview: null
      }

      this.handleAlbumArtFile = this.handleAlbumArtFile.bind(this);
      this.handleAudioFile = this.handleAudioFile.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleAlbumArtFile(e) {
    e.preventDefault();
    const imageFile = e.currentTarget.files[0];
    this.setState({
      albumArt: imageFile,
      imagePreview: URL.createObjectURL(imageFile)})
    }
  
    handleAudioFile(e) {
      e.preventDefault();
      this.setState({audioFile: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('sound[description]', this.state.title);
      formData.append('sound[photo]', this.state.albumArt);
      formData.append('sound[sound]', this.state.audioFile);
      formData.append('sound[uploader_id]',this.props.currentUserId);
      this.props.createSound(formData)
        .then(() => this.props.history.push(`/discover`));
    }

    render () {

      const imagePreview = this.state.imagePreview 
      ? <img className="image-preview" src={this.state.imagePreview}/> 
      : <div></div>


      return (
        <>
          <Navbar />
          <div className='upload-background'>
            <div className='upload-content'>
              <div className='upload-text'>
                Upload
              </div>
              <div className='upload-form'>
                <label className="upload-sound-text">
                  <input 
                  className="current-sound"
                  onChange={this.handleAudioFile}
                  type="file" 
                  accept=".mp3"
                  />
                  Add Audio File
                </label>
                <label className="upload-photo-text">
                  <input 
                  className="current-photo" 
                  onChange={this.handleAlbumArtFile}
                  type="file" 
                  accept=".jpeg, .jpg, .png"
                  />
                  Add Sound Art
                </label>
                {imagePreview}
                <label className="title-text">
                  Sound Title:
                  <input 
                  type="text"                   
                  />
                </label>
                <button 
                  className="upload-submit-button"
                  // disable upload for production to prevent hosting payment issues
                  // onClick={this.handleSubmit}
                  >
                  Upload Sound
                </button>
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default Upload