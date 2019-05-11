import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CommentsComp extends Component {
  render() {
    return (
      <div>
          <h2>Any comments you want to leave? </h2>
          <input placeholder='Comments' />
      <Link to='/review'><button> Submit </button></Link>
        <br/>
      </div>
    );
  }
}

export default connect ()(CommentsComp);