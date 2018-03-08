import React, { Component } from 'react';
import './leaderBoard.css';
import ScoreBoard from '../scoreBoard/scoreBoard';

class LeaderBoard extends Component {
  render() {
    return (
      <div className={(this.props.currentUser === this.props.username) ? 'CurrentUser' : 'OldUser'} >

        <div >{this.props.username}</div>
        <div> {this.props.score}</div>

      </div>


    );
  }
}

export default LeaderBoard;
