import React, { Component } from 'react';
import './welcomeForm.css';

class WelcomeForm extends Component {
  render() {
    return (
      <div className="WelcomeForm" >
        <div className="Welcome">
          <div><p>Welcome</p></div>
          <div><p>To</p></div>
        </div>
        <div><p>{this.props.gameName}</p></div>
      </div>

    );
  }
}

export default WelcomeForm;
