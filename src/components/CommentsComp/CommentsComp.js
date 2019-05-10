import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't Forget Your Feedback !</i></h4>
        </header>
          <h2>Any comments you want to leave? </h2>
          <input placeholder='Comments' />
        <br/>
      </div>
    );
  }
}

export default connect ()(CommentsComp);