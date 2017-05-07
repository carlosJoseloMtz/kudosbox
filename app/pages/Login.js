import React from 'react'

export default class Login extends React.Component {

  shouldComponentUpdate () {
    return true
  }

  handleLogin () {
    console.log('handling like a boss :V')
  }

  render () {
    return (
      <div>
        <h1>{'Login Page :V hmm'}</h1>

        <input id="user-email"
            label="sample@somedomain.com"
            type="email"
        />
        <input id="user-pwd"
            label="******"
            type="password"
        />

        <hr />
        <button onClick={this.handleLogin}>{'Login'}</button>
      </div>
    )
  }
}
