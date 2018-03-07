import React, { Component } from 'react';
import './loginForm.css';
import InputContainer from '../inputContainer/inputContainer';
import Button from '../button/button';

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm" >
        <div className="LoginHeading">
          Login
        </div>
        <div>
          <InputContainer username="Username" takeUsername={this.props.takeUsername} />
        </div>
        <div>
          <Button label="Login" onlogin={this.props.onlogin} />
        </div>
      </div>

    );
  }
}

export default LoginForm;
