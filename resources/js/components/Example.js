import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      // Zone1: This to define variables
    }
  }
      // Zone2: This to define the methods
  render() {
      // Zone3: This to define visual element
      return (
        <div></div>
      );

  }
}

if (document.getElementById('example')) {
  ReactDOM.render(<Example/>, document.getElementsById('example'))
}