import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Success extends Component {




handleSubmit = (event) =>{
  event.preventDefault(); 
  
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2> Any comments you want to leave? </h2>
          <input placeholder='Comments' type="text" onChange={this.handleChange}  />
      <Link to='/review'><button> Submit </button></Link>
        <br/>
        </form>
      </div>
    );
  }
}


export default connect()(Success );