# AudioFog

![landing page image](https://github.com/Schploink/AudioFog/blob/main/app/assets/images/MainPage.png "Main Page Image")


## Presenting: Audiofog

![Live Site](https://github.com/Schploink/AudioFog/blob/main/app/assets/images/AFlogo1_vert_white.png "AudioFog logo white")

[AudioFog](https://audiofog.herokuapp.com/#/) is a full-stack web application that is a clone of the SoundCloud website with Ruby on Rails utilizing a postgreSQL database as the backend, React / Redux as the frontend, and utilizing AWS cloud-based hosting. The aim was to create a full-stack application from scratch with workable features similar to SoundCloud in user authentication, uploadable sounds, audio playback, the ability to leave comments, and general site structure, with contemporary styling aesthetics.

## Features

### User Authentication

  * Users can create a secure account and login.
  * Credentials are checked to restrict users from accessing certain pages, redirecting unauthorized users to the main index page.
  * A demo user is available to experience the website and features without needing to create an account for the purposes of previewing the application.
```
    const Auth = ({ component: Component, path, loggedIn, exact }) => (
      <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/discover" />
        )
      )} />
    );

    const Protected = ({ component: Component, path, loggedIn, exact }) => (
      <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )} />
    );


    const mapStateToProps = state => (
      { loggedIn: Boolean(state.session.id) }
    );

    export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

    export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
```
### Sound uploading and deletion

  * Authorized Users can create/upload their own sounds. Only the uploading user can delete/destroy sounds

```
   const deleteButton = sound.uploader_id === this.props.currentUser
            ? <div 
                className="comment-delete-button"
                onClick={() => this.props.deleteSound(sound.id)}
                >
                    <RiDeleteBin7Line />
                </div>
            : <div></div>
```
  * Scalable sound item components are used to display and give full functionality to all uploaded sounds on the main user splash page

![User Items](https://github.com/Schploink/AudioFog/blob/main/app/assets/images/UserItems.png)
```
        return (
            <div className="discover-song-item">
                <div className="discover-art-button">
                    <div className="discover-art">
                        {coverArt}
                    </div>
                    <div className="discover-play-pause" onClick={this.updateCurrentSound}>
                        <div className="discover-icon">
                            { this.props.currentSound === this.props.sound && this.props.isPlaying ? <IoPause /> : <IoPlay />}
                        </div>
                    </div>
                </div>
                <Link to={`/sounds/${currentSound.id}`}>
                    <div className="discover-sound-title">{currentSound.description}</div>
                </Link>
                <Link to={`/users/${currentSound.uploader_id}`}>
                    <div className="discover-artist-name">{currentSound.artist}</div>
                </Link>
            </div>
        )

```
  
### Application-wide media player

  * Sounds are able to playback through a custom media player regardless of where the user is on the application

```
return (
		 		<div className="player-container">
          <div className="player-controls">
            <audio 
              autoPlay
              id="audio" 
              ref={(audio) => {this.audio = audio}} 
              src={this.props.currentSound ? this.props.currentSound.soundUrl : ""} 
              preload="metadata">

            </audio>

            <button className="previous-track" onClick={this.restartSound()}>
              <IoPlaySkipBack />
            </button>

            <button onClick={this.handlePlayPause} className="play-pause">
              { this.props.isPlaying ? <IoPause /> : <IoPlay />}
            </button>

            <button className="next-track" onClick={this.nextSound()}>
              <IoPlaySkipForward />
            </button>
            
            <div className="current-time">
              {normalizeTime(this.state.currentTime)}
            </div>

            <div className="progress-bar-container">
              <input 
              ref={(slider) => {this.slider = slider}} 
              type="range"
              className="progress-bar"
              onInput={this.changeRange}
              min="0"
              max={this.state.duration} />
            </div>

            <div className="time-remaining">
              {normalizeTime(this.state.duration)}
            </div>
            <div className="volume-container">
              <IoVolumeHigh className="volume-icon"/>
              <input 
                type="range"
                className="volume-bar"
                min="0.0"
                max="1000.0"
                defaultValue={this.state.volume * 1000}
                onChange={this.volumeChange}
              />
            </div>
            <div className="player-track-container">
              <div className="player-art-container">
                  {artDiv}
              </div>
              <div className="song-artist-title">
                <Link to={`/sounds/${soundId}`}>
                  <div className="player-song-title">{soundName}</div>
                </Link>
                <Link to={`/users/${artistId}`}>
                  <div className="player-artist">{artistName}</div>
                </Link>
              </div>
            </div>
            
          </div>
		 		</div>
		)}
```
  * A global state is created to determine if a song is playing, and if the inspected song is the currently playing song to correctly indicate play/pause buttons across the application


### Sound and User show page

  * Each individual User and each individual Sound uploaded has a unique page
  * Ability for users to leave comments on uploaded sounds, only the comment creator can delete a comment

![Song page with comments](https://github.com/Schploink/AudioFog/blob/main/app/assets/images/SongPage.png)


## Thank you for checking out my App!
