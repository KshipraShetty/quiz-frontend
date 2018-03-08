import React, { Component } from 'react';
import './allOptions.css';
import Radio from '../radio/radio';

class AllOptions extends Component {
  render() {
    const opts = [];
    console.log(this.props.eachOption);

    for (const eachOpt in this.props.eachOption) {
      let checked;

      console.log(this.props.answers[0].useranswers);
      this.props.answers[0].useranswers.map((eachAns) => {
        if (eachAns.questionId === this.props.questionId) {
          if (this.props.eachOption[eachOpt] === eachAns.answer) {
            checked = true;
          } else { checked = false; }
        }
      });


      opts.push(<Radio
        qid={this.props.qid}
        answer={this.props.eachOption[eachOpt]}
        questionId={this.props.questionId}
        answers={this.props.answers}
        checked={checked}
        onRadioClick={event => this.props.onRadioClick(event)}
      />);
    }
    return (

      <div className="RadioButton" >
        {opts}
      </div>

    );
  }
}

export default AllOptions;
