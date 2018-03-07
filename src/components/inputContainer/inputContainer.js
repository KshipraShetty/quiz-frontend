import React, { Component } from 'react';
import './inputContainer.css';

class LoginContainer extends Component {
  render() {
    return (
      <div className="InputContainer" >
        <div>
          {this.props.username}
        </div>
        <div>
          <input type="text" onChange={this.props.takeUsername} />
        </div>
      </div>

    );
  }
}

export default LoginContainer;
