import React, { Component } from 'react';
import './questionList.css';
// import QuestionList from '../questionList/questionList';
import AllOptions from '../allOptions/allOptions';

class QuestionList extends Component {
  render() {
    const opts = [this.props.eachQuestion.option];

    const options = opts.map(eachOption =>
      (<AllOptions
        eachOption={eachOption}
        qid={this.props.qid}
        questionId={this.props.questionId}
        answers={this.props.answers}
        onRadioClick={event => this.props.onRadioClick(event)}
      />));
    return (
      <div className="QuestionList" >
        <div className="QuestionNo">
          {this.props.qid}
        </div>
        <div className="Question">
          {this.props.eachQuestion.question}
        </div>
        <div className="Options" >
          {options}
        </div>
      </div>

    );
  }
}

export default QuestionList;
