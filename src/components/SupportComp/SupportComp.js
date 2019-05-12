import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SupportComp extends Component {

  state = { 
      support: ''
  }
  

  handleChange = (event) => {
    this.setState({
      support : event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.dispatch({ type: 'SUPPORT', payload: this.state.support})
  }
  
  // sendToReview = (student) => {
  //   let choice = {
  //     understand: student.support
  //   }
  //   this.props.dispatch({ type: 'SUPPORT', payload: choice})
  // }




  render() {
    return (
      <div >
       <form onSubmit={this.handleSubmit}>
        <h2>How well are you being supported ?</h2>
        <input className='support' type="number" onChange={this.handleChange} />
        <Link to='/comments'><button>Submit</button></Link>
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
export default connect(mapToReduxState)(SupportComp);