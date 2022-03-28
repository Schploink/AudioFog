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

  * Sounds are able to playback through a playback bar regardless of where the user is on the application
  * A global state is created to determine if a song is playing, and which one to correctly indicate play/pause buttons across the application

```
        const playstateReducer = (oldState = defaultState, action) => {

            Object.freeze(oldState);

            switch (action.type) {
                case PLAY_SOUND:
                    return true;
                case PAUSE_SOUND:
                    return false;
                default:
                    return oldState;
            }
        }

        if (this.props.currentSound === this.props.sound) {
            if (this.props.isPlaying) {
                document.getElementById('audio').pause()
                this.props.pauseSound()
            } else {
                document.getElementById('audio').play()
                this.props.playSound()
            }
        } else {
            this.props.receiveCurrentSound(this.props.sound.id)
            this.props.playSound()
            // setTimeout( () => 
            // document.getElementById('audio').play(), 200)
        }
        }
```

### Sound and User show page

  * A show page for each unique user and sound
  * Ability for users to leave comments on uploaded sounds
