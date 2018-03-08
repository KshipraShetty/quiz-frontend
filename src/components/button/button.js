import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonSelect: '',
    };
  }
 check = () => {
   if (typeof (this.props.onlogin) === 'function') {
     console.log('idk');
     this.setState({
       buttonSelect: this.props.onlogin,
     });
   } else if (typeof (this.props.onCalculateClick) === 'function') {
     this.setState({
       buttonSelect: this.props.onCalculateClick,
     });
   } else {
     this.setState({
       buttonSelect: this.props.onPlayAgain,
     });
   }

   console.log(this.state);
 };

 render() {
   return (
     <div className="Button" >
       <button className="ActualButton" onFocus={this.check} onClick={this.state.buttonSelect}> {this.props.label} </button>
     </div>

   );
 }
}

export default Button;
