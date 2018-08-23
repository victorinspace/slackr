import React, { Component } from 'react'
import { withAuth } from './Authentication'
import { Redirect } from 'react-router-dom'
import Title from './Title'

class Login extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: ''
  }

  login = (e) => {
    e.preventDefault()
    this.props.signin(this.state.username, this.state.password, () => {
      this.setState({ redirectToReferrer: true })
    })
  }

  logout = () => {
    this.props.signout()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { from } = this.props.location.state || { from: {pathname: this.props.defaultRedirect} }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    } else {
      return (
        <div className="login-page-container">
          <Title />
          <h3 className="page-title">Log In</h3>
          <form className="login-form-container" onSubmit={this.login}>
            <input className="login" type="text" 
                    value={this.state.username} onChange={this.handleChange} 
                    name="username" placeholder="Username" />
            <input className="password" type="password" 
                    value={this.state.password} onChange={this.handleChange} 
                    name="password" placeholder="Password" />
            <button className="login-button" onClick={this.login}>Log In</button>
          </form>
          
        </div>
      )
    }
  }
}

export default withAuth(Login)