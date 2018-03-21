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
      return;
    }
    this.setState({
      display: 1,
      questions: onlogin.data.questionStatus,
      answers: onlogin.data.userAnswers,
      errMsg: '',
    });


    if (this.state.answers[0].useranswers.length !== this.state.questions.length) {
      this.setState({
        disable: true,
      });
    }
    //   console.log(this.state);
  });
}

onRadioClick=(event, questionId) => {
  // console.log(this.state.answers);

  // const new1 = [];

  // for (let i = 0; i < this.state.answers[0].useranswers.length; i += 1) {
  //   // console.log(this.state.answers[0].useranswers[i].questionId);
  //   // console.log(typeof event.target.name);


  //   if (this.state.answers[0].useranswers[i].questionId === Number(event.target.name)) {
  //     // ind = i;
  //     console.log('one');

  //     const obj = this.state.answers[0];
  //     // console.log(obj.useranswers[i].answer);

  //     obj.useranswers[i].answer = event.target.value;
  //     new1.push(obj);
  //   } else {
  //     console.log('two');

  //     new1.push(this.state.answers[0]);
  //   }
  // }
  // if (this.state.answers[0].useranswers.length !== 0) {
  //   console.log('three');

  //   this.setState({
  //     answers: new1,
  //   });
  // } else {
  //   console.log('four');

  //   const obj = this.state.answers[0];
  //   const userObj = {
  //     questionId: event.target.name,
  //     answer: event.target.value,
  //   };
  //   obj.useranswers[0] = userObj;
  //   new1.push(obj);
  //   this.setState({
  //     answers: new1,
  //   });
  // }

  // onradioclick the state should be updated
  // check if the question is already answered
  // then update the answer
  // else
  // create a new answer
  let obj = {};
  const obj2 = {};
  let new1 = [];
  const new2 = [];
  // if never answered any questions before
  if (this.state.answers[0].useranswers.length === 0) {
    console.log('0');

    obj = this.state.answers[0];
    obj2.userId = this.state.answers[0].id;
    obj2.questionId = event.target.name;
    obj2.answer = event.target.value;
    new2.push(obj2);
    obj.useranswers = new2;
    new1.push(obj);
    this.setState({
      answers: new1,
    });
  } else {
    console.log('1');
    console.log(this.state.answers);

    let flag = false;
    new1 = this.state.answers;
    for (let i = 0; i < this.state.answers[0].useranswers.length; i += 1) {
      // check if answered before
      if (this.state.answers[0].useranswers[i].questionId === Number(event.target.name)) {
        console.log('2');

        // update that answer
        flag = true;
        new1[0].useranswers[i].answer = event.target.value;
      }
    }
    // obj = this.state.answers[0];
    if (flag === false) {
      console.log('3');

      obj2.userId = this.state.answers[0].id;
      obj2.questionId = event.target.name;
      obj2.answer = event.target.value;
      // new2.push(obj2);
      // obj.useranswers = new2;
      new1[0].useranswers.push(obj2);
    }
  }
  // console.log(this.state.answers);


  axios({
    method: 'POST',
    url: '/populateUserAnswer',
    data: {
      answer: event.target.value,
      userId: this.state.answers[0].id,
      questionId: event.target.name,
    },
  });
  // console.log(this.state.answers);

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
