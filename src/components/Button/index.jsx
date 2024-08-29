import React, { Component } from 'react';


export class Button extends Component {
  render() {
    const { title, onClick } = this.props
    return (
      <button onClick={onClick}>
        { title }
      </button>
    );
  }
}