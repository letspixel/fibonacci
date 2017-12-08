import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';
import logo from './assets/images/logo.png';
import FiboInput from './components/FiboInput.js';

class FiboCalc extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.calculateNumber.bind(this);
    this.state = { 
      numberValue: '',
      showResult: false
    };
  }

  onChangeValue = param => {
    this.setState( param );
  };

  calculateNumber(event) {
    event.preventDefault();
    let number =  this.state.numberValue;
    let result = '';
    let order = '';
    let a = 1, b = 0, temp;
    if (number === '0') {
      order = '';
    }
    if (number === '1') {
      order = 'st';
    }
    if (number ===  '2') {
      order = 'nd';
    }
    if (number === '3') {
      order = 'rd';
    }
    if (number >= 4) {
      order = 'th';
    }
    while (number >= 0){
      temp = a;
      a = a + b;
      b = temp;
      number--;
      result = a - b;
    }
    this.setState({
      showResult: true,
      message: 'The result for the ' + this.state.numberValue + order + ' number is ' + result
    });
  }


  render() {
    return (
      <div>
        <div className="container">
          <img src={logo} title="Nvidia" alt=""/>
          <h1>Hello, Matt.</h1>
          <p>Please, enter the N number to receive the Fibonacci result. Enjoy!</p>

          <form onSubmit={this.onSubmit}>
            <FiboInput 
            handleValue={this.onChangeValue} 
            />
            <button 
            type="submit"
            onClick={this.state.calculateNumber} 
            >
              Calculate
            </button>
          </form>
        </div>
        <div id="result" className={classnames(
            'container',
            {
              'show'   : this.state.showResult
            }
          )}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default FiboCalc;
