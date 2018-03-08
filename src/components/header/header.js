import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="HeaderClass" >
        <div>Quizzy</div>
        <div>  {this.props.helloUser} {this.props.username} </div>
      </div>

    );
  }
}

export default Header;
