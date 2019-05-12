import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CommentsComp extends Component {

state = { 
  comments: ''
}


handleChange = (event) => {
  this.setState({
      feeling: event.target.value
   })
 }


handleSubmit = (event) =>{
  event.preventDefault(); 
  this.props.dispatch({ 
    type: 'COMMENTS', payload: this.state.comments
  })
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


const mapToReduxState = (reduxState) => {
  return {
     reduxState
  }
}
export default connect(mapToReduxState)(CommentsComp);