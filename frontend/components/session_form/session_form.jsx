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
      .then(() => this.props.history.push('/UserProfile'));
  }
    
  demoUser(e) {
    e.preventDefault();
    const demoUser = Object.assign({
      email: "demolovato@they.com",
      password: "secretdemo",
      username: "Wonderful Person"
    })
    this.props.processForm(demoUser)
  }
  render() {
    return (
      <div className="login-form-container">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Step into Audiofog
        <button className="demo-user" onClick={this.demoUser}>
          Continue With Demo User
        </button>
        <br />
        Please {this.props.formType}!
        <div className="login-form">
          <br />
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br />
          <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
      </form>
    </div>
  );
  }
}




export default SessionForm