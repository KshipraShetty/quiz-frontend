import React, { Component } from 'react';
import './radio.css';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }


  render() {
    console.log(this.props.questionId);
    const check = (event) => {
      console.log('wtf');

      for (const eachAns in this.props.answers) {
        if (eachAns.questionId === this.props.questionId) {
          if (event.target.value === eachAns.answer) {
            console.log('lol');
            this.setState({
              checked: true,
            });
            return;
          }
        }
      }
      console.log('lolol');
    };
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
