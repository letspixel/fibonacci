import React, { Component } from 'react';
import propTypes from 'prop-types';

class FiboInput extends Component {
  
  static propTypes = {
   handleValue: propTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = { 
      numberValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    var numberInputed = event.target.value;
    console.log(numberInputed);
    this.setState({ numberValue: numberInputed  })
    this.props.handleValue({ numberValue: numberInputed});
  }

  render() {
    return (
      <input 
      type="number" 
      onChange={this.handleChange} 
      placeholder="Type a number"
      min="0"
      max="99"
      />
    );
  }
}

export default FiboInput;
