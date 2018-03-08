import React, { Component } from 'react';
import './leaderBoardContainer.css';
import ScoreBoard from '../scoreBoard/scoreBoard';
import LeaderBoard from '../leaderBoard/leaderBoard';
import Button from '../button/button';

class LeaderBoardContainer extends Component {
  render() {
    const allBoards = this.props.leaderBoard.data.map(each => (
      <LeaderBoard username={each.userId} score={each.score} currentUser={this.props.currentUser} />));
    return (
      <div className="LeaderBoardContainer " >

        <ScoreBoard
          currentScore={this.props.currentScore}
          maxScore={this.props.maxScore}
        />
        {allBoards}
      </div>


    );
  }
}

export default LeaderBoardContainer;
