import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


class UnderComp extends Component {
  render() {
    return (
      <div >
        <h2>How well are you understanding the content ?</h2>
        <input type="number" placeholder="level of 1-5"> </input>
        <button>Submit </button>
        <br/>
      </div>
    );
  }
}

export default connect()(UnderComp);