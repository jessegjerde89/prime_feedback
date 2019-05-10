import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


class UnderComp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget Your FeedBack !</i></h4>
        </header>
        <h2>How well are you understanding the content ?</h2>
        <input type="number" placeholder="level of 1-5"> </input>
        <button>Submit </button>
        <br/>
      </div>
    );
  }
}

export default connect()(UnderComp);