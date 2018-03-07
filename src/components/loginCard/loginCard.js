import React, { Component } from 'react';
import './loginCard.css';
import WelcomeForm from '../welcomeForm/welcomeForm';
import LoginForm from '../loginForm/loginForm';

class LoginCard extends Component {
  render() {
    return (
      <div className="LoginCard" >

        <WelcomeForm gameName="Quizzy!" />
        <LoginForm takeUsername={this.props.takeUsername} onlogin={this.props.onlogin} />
      </div>


    );
  }
}

export default LoginCard;
