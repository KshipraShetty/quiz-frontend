import React, { Component } from 'react';
import './radio.css';

class Radio extends Component {
  render() {
    console.log(this.props.questionId);

    return (

      <div className="Radio" >
        <input
          type="radio"
          name={this.props.questionId}
          value={this.props.answer}
          checked={this.props.checked}
          onClick={event => this.props.onRadioClick(event)}

        />
        {this.props.answer}
      </div>

    );
  }
}

export default Radio;
