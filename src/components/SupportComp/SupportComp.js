import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SupportComp extends Component {
  render() {
    return (
      <div className="App">
       
        <h2>How well are you being supported !</h2>
        <input type="number"></input>
        <button>Submit</button>
        <br/>
      </div>
    );
  }
}

export default connect()(SupportComp);