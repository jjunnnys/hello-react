import React, { Component } from 'react';
import './ValidationSample.css';

export default class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonChange = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.ppby.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.ppby = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonChange}>검증하기</button>
      </div>
    );
  }
}
