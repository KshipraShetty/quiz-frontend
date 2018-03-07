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
   } else {
     this.setState({
       buttonSelect: this.props.onCalculateClick,
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
