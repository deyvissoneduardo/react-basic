import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    state = {
      name: 'Test',
      counter: 0
    };

  handlePClick = () =>{
    this.setState({
      name: 'Deyvisson'
    })
  }

  handleAClick = (event) => {
    event.preventDefault()
    const { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }

  render() {
    const { name, counter } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" onClick={this.handlePClick}>
          Qualquer coisa {name}
        </p>
        <div>
          <p onClick={this.handleAClick()}>counter {counter}</p>
        </div>
      </div>
    );
  }
}

