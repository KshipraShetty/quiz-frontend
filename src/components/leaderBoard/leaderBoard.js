import React, { Component } from 'react';
import './leaderBoard.css';

class LeaderBoard extends Component {
  render() {
    return (
      <div className={(this.props.currentUser === this.props.questionId) ? 'CurrentUser' : 'OldUser'} >
        <div >
          {this.props.numb}
          <span className="SpaceBetween">
            {'.  '}
            {this.props.username}
          </span>
        </div>
        <div> {this.props.score}</div>

      </div>


    );
  }
}

export default LeaderBoard;
