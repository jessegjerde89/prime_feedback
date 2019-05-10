import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


class SupportComp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i></i></h4>
        </header>
        <h2>How well are you being supported !</h2>
        <input type="number"></input>
        <button>Submit</button>
        <br/>
      </div>
    );
  }
}

export default connect()(SupportComp);