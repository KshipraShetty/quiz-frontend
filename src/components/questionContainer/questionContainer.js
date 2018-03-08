import React, { Component } from 'react';
import './questionContainer.css';
import QuestionList from '../questionList/questionList';
import Button from '../button/button';

let qid = 0;
class QuestionContainer extends Component {
  render() {
    const quests = this.props.questions.map((eachQuestion) => {
      qid += 1;
      return (<QuestionList
        eachQuestion={eachQuestion}
        qid={qid}
        answers={this.props.answers}
        questionId={eachQuestion.questionId}
        onRadioClick={event => this.props.onRadioClick(event)}
      />);
    });
    return (
      <div className="QuestionContainer" >
        {quests}
        <div className="CalculateButton">
          <Button label="Calculate" onCalculateClick={this.props.onCalculateClick} disable={this.props.disable} />
        </div>
      </div>

    );
  }
}

export default QuestionContainer;
