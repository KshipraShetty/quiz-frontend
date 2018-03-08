import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../header/header';
import LoginContainer from '../loginContainer/loginContainer';
import QuestionContainer from '../questionContainer/questionContainer';
import LeaderBoardContainer from '../leaderBoardContainer/leaderBoardContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      username: '',
      questions: [],
      answers: [],
      leaderBoard: [],
      currentScore: 0,
      maxScore: 0,
    };
  }


onlogin = () => {
  axios({
    method: 'POST',
    url: '/login',
    data: {
      username: this.state.username,
    },
  }).then((onlogin) => {
    this.setState({
      display: 1,
      questions: onlogin.data.questionStatus,
      answers: onlogin.data.userAnswers,
    });
  });
}

onRadioClick=(event, questionId) => {
  console.log(questionId);

  axios({
    method: 'POST',
    url: '/populateUserAnswer',
    data: {
      answer: event.target.value,
      userId: this.state.answers[0].id,
      questionId: event.target.name,
    },
  });
}


onCalculateClick=() => {
  axios({
    method: 'POST',
    url: '/calculateScore',
    data: {
      userId: this.state.answers[0].id,
    },
  }).then((leaderBoard) => {
    console.log(this.state.leaderBoard);
    if (leaderBoard.data === 'Answer all questions') {
      alert('all question should be answered');
    } else {
      leaderBoard.data.map((eachUser) => {
        console.log(eachUser);

        if (eachUser.userId === this.state.answers[0].id) {
          this.setState({
            display: 2,
            leaderBoard,
            currentScore: eachUser.score,
            maxScore: this.state.questions.length,
          });
        }
      });
    }
  });
}

takeUsername = (event) => {
  this.setState({
    username: event.target.value,
  });
  console.log(this.state.username);
}

render() {
  if (this.state.display === 0) {
    return (
      <div className="App" >
        <div className="Header">
          <Header helloUser="" username="" />
        </div>
        <div className="Body">
          <LoginContainer takeUsername={event => this.takeUsername(event)} onlogin={this.onlogin} />
        </div>
      </div>

    );
  } else if (this.state.display === 1) {
    // console.log(this.state);

    return (
      <div className="App" >
        <div className="Header">
          <Header helloUser="Hello" username={this.state.username} />
        </div>
        <QuestionContainer
          questions={this.state.questions}
          answers={this.state.answers}
          onRadioClick={event => this.onRadioClick(event)}
          onCalculateClick={this.onCalculateClick}
        />

      </div>
    );
  }
  return (
    <div className="App">
      <div className="Header">
        <Header helloUser="Hello" username={this.state.username} />
      </div>
      <LeaderBoardContainer
        leaderBoard={this.state.leaderBoard}
        currentUser={this.state.answers[0].id}
        currentScore={this.state.currentScore}
        maxScore={this.state.maxScore}
      />
    </div>
  );
}
}

export default App;
