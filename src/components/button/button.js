import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <div className="Button" >
        <button className="ActualButton" onClick={this.props.onlogin}> {this.props.label} </button>
      </div>

    );
  }
}

export default Button;
