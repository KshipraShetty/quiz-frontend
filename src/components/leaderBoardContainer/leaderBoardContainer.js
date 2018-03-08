import React, { Component } from 'react';
import './leaderBoardContainer.css';
import ScoreBoard from '../scoreBoard/scoreBoard';
import LeaderBoard from '../leaderBoard/leaderBoard';
import Button from '../button/button';

class LeaderBoardContainer extends Component {
  render() {
    let q = 0;
    console.log(this.props.allUsers);

    const allBoards = this.props.leaderBoard.data.map((each) => {
      q += 1;
      console.log(q);

      return (<LeaderBoard
        questionId={each.userId}
        username={each.username}
        score={each.score}
        currentUser={this.props.currentUser}
        numb={q}
      />);
    });
    return (
      <div className="LeaderBoardContainer " >

        <ScoreBoard
          currentScore={this.props.currentScore}
          maxScore={this.props.maxScore}
        />
        {allBoards}
        <Button
          label="Play Again"
          onPlayAgain={this.props.onPlayAgain}
        />
      </div>


    );
  }
}

export default LeaderBoardContainer;
