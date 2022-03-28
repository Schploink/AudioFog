# AudioFog

![alt text](https://github.com/Schploink/AudioFog/blob/main/app/assets/images/AFlogo1_vert_white.png "AudioFog logo white")

## Presenting: Audiofog

[AudioFog](https://audiofog.herokuapp.com/#/) is a full-stack web application that is a clone of the SoundCloud website with Ruby on Rails utilizing a postgreSQL database as the backend, React / Redux as the frontend, and utilizing AWS cloud-based hosting. The aim was to create a full-stack application from scratch with workable features similar to SoundCloud in user authentication, uploadable sounds, audio playback, the ability to leave comments, and general site structure, with contemporary styling aesthetics.

## Features

### User Authentication

  * Users can create a secure account and login.
  * Credentials are checked to restrict users from accessing certain pages, redirecting unauthorized users to the main index page.
  * A demo user is available to experience the website and features without needing to create an account for the purposes of previewing the application.

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

### Sound uploading and playback

  * Users can create/upload, edit, or delete/destroy sounds
  * Sounds are able to playback through a playback bar regardless of where they are on the site
  * The playback bar will allow for tracking when clicked on the playbar or on the player in the show page for the sound
  * A volume control for the playback bar

### Sound and User show page

  * A show page for each unique user and sound
  * Ability for users to leave comments on uploaded sounds
