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
      disable: false,
      display: 0,
      username: '',
      questions: [],
      answers: [],
      leaderBoard: [],
      currentScore: 0,
      maxScore: 0,
      errMsg: '',
      questionOnClick: [],
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
    if (onlogin.data.statusCode === 400) {
      this.setState({
        display: 0,
        errMsg: 'Enter valid username',
      });
    } else {
      this.setState({
        display: 1,
        questions: onlogin.data.questionStatus,
        answers: onlogin.data.userAnswers,
        errMsg: '',
      });
    }

    if (this.state.answers[0].useranswers.length !== this.state.questions.length) {
      this.setState({
        disable: true,
      });
    }
    //   console.log(this.state);
  });
}

onRadioClick=(event, questionId) => {
  // console.log(questionId);
  // if (this.state.questionOnClick.length === 0) {
  //   console.log('hehe');

  //   this.setState({
  //     questionOnClick: this.state.questionOnClick.push(event.target.name),
  //   });
  //   console.log(this.state.questionOnClick);
  // }
  // for (let i = 0; i < this.state.questionOnClick.length; i += 1) {
  //   console.log(this.state.questionOnClick[i]);

  //   if (event.target.name !== this.state.questionOnClick[i]) {
  //     console.log('here');

  //     this.setState({
  //       questionOnClick: this.state.questionOnClick.push(event.target.name),
  //     });
  //   }
  // }

  // // this.state.questionOnClick.forEach((each) => {
  // // console.log('whatever');


  // if (this.state.questionOnClick.length === this.state.questions.length) {
  //   console.log('sgdwjg');

  //   this.setState({
  //     disable: false,
  //   });
  // }

  axios({
    method: 'POST',
    url: '/populateUserAnswer',
    data: {
      answer: event.target.value,
      userId: this.state.answers[0].id,
      questionId: event.target.name,
    },
  });
  axios({
    method: 'POST',
    url: '/login',
    data: {
      username: this.state.username,
    },
  }).then((onlogin) => {
    this.setState({
      questions: onlogin.data.questionStatus,
      answers: onlogin.data.userAnswers,
    });
  });
  // console.log(this.state.answers[0].useranswers.length);

  if (this.state.answers[0].useranswers.length === this.state.questions.length - 1) {
    this.setState({
      disable: false,
    });
  }
}


onCalculateClick=() => {
  axios({
    method: 'POST',
    url: '/calculateScore',
    data: {
      userId: this.state.answers[0].id,
    },
  }).then((leaderBoard) => {
    // console.log(this.state.leaderBoard);
    if (leaderBoard.data === 'Answer all questions') {
      // this.setState({
      //   disable: true,
      // });
      alert('all question should be answered');
    } else {
      leaderBoard.data.map((eachUser) => {
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
//  console.log(this.state.username);
}

onPlayAgain = () => {
  this.setState({
    display: 0,
  });
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
          <div className="ErrMsg">
            {this.state.errMsg}
          </div>
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
          disable={this.state.disable}
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
        onPlayAgain={this.onPlayAgain}
      />
    </div>
  );
}
}

export default App;
