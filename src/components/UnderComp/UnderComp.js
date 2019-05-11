import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UnderComp extends Component {

handleClick = (event) =>{
  event.preventDefault(); 
  
}



  render() {
    return (
      <div >
        <h2>How well are you understanding the content ?</h2>
        <input type="number" placeholder="level of 1-5" /> 
        <Link to='/supported'><button>Submit</button></Link>
        <br/>
      </div>
    );
  }
}

export default connect()(UnderComp);