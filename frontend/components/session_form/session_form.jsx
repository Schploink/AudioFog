import React from "react"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: "",
      password: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.processUser = this.processUser.bind(this)
    this.demoUser = this.demoUser.bind(this)
    this.displayErrors = this.displayErrors.bind(this)
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }) 
  }
    
  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const emailArray = email.split('@');
    const username = emailArray[0];
    this.setState({ username: username }, this.processUser)
  }
    
  processUser() {
    this.props.processForm(this.state)
      // .then(() => this.props.history.push('/UserProfile'))
        .then(this.props.closeModal);
  }
    
  demoUser(e) {
    e.preventDefault();
    const demoUser = Object.assign({
      email: "demolovato@they.com",
      password: "secretdemo",
      username: "Wonderful Person"
    })
    this.props.processDemo(demoUser)
      .then(this.props.closeModal())
  }

  displayErrors() {
    return (
      <ul className="render-errors">
        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>
        })}
      </ul>
    )
  }

  render() {

    
    const modalSignup = (
      <div className="login-form-container">
        <h2>Step into Audiofog</h2>
        <button className="demo-user" onClick={this.demoUser}> 
          Continue With Demo User
        </button>
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <br />
        Please {this.props.formType}!
        {this.displayErrors()}
        <div className="login-form">
          <br />
          <label>
            <input type="text"
              placeholder="Your email address"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              />
          </label>
          <br />
          <label>
            <input type="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              />
          </label>
          <br />
            <button className="session-submit" type="submit">{this.props.formType}</button>
        </div>
      </form>
    </div>
  );
  
  const modalLogin = (
    <div className="login-form-container">
        <h2>Step into Audiofog</h2>
        <button className="demo-user" onClick={this.demoUser}>
          Continue With Demo User
        </button>
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <br />
        Please {this.props.formType}!
        {this.displayErrors()}
        <div className="login-form">
          <br />
          <label>
            <input type="text"
              placeholder="Your email address"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              />
          </label>
          <br />
          <label>
            <input type="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br />
          <button className="session-submit" type="submit">{this.props.formType}</button>
        </div>
      </form>
    </div>
  )
  let modal;
  if (this.props.formType === 'signup') {
    modal = modalSignup
  } else {
    modal = modalLogin
  }

  return (
    <div>
      {modal}
    </div>
  )
  }
}




export default SessionForm