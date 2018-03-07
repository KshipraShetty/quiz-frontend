import React, { Component } from 'react';
import './loginContainer.css';
import LoginCard from '../loginCard/loginCard';

class LoginContainer extends Component {
  render() {
    return (
      <div className="LoginContainer" >
        <LoginCard takeUsername={this.props.takeUsername} onlogin={this.props.onlogin} />
      </div>

    );
  }
}

export default LoginContainer;
