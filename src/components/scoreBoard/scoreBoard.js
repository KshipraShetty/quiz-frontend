import React, { Component } from 'react';
import './scoreBoard.css';


class ScoreBoard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentScore: 0,
//       maxScore: 0,
//     };
//   }
//     output = () => {
//       console.log('here');

//       this.props.leaderBoard.map((eachUser) => {
//         if (eachUser.userId === this.props.currentUser) {
//           this.setState({
//             currentScore: eachUser.score,
//           });
//         }
//       });
//     }
  render() {
    return (
      <div className="ScoreBoard " >

        <span className="CurrentScore">{this.props.currentScore}</span>
        <span className="MaxScore">/{this.props.maxScore}</span>
      </div>


    );
  }
}

export default ScoreBoard;
