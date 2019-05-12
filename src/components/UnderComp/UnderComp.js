import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UnderComp extends Component {

state = {
  student: {
    understand: ''
  }
}

handleChange = (newVal, event) => {
  this.setState({
    [newVal]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault(); 
  this.sendToReview(this.state.student)
}

sendToReview = (student) => {
  let view = {
    understand: student.understand
  }
  this.props.dispatch({ type: 'UNDERSTAND', payload: view})
}




  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
        <h2>How well are you understanding the content ?</h2>
        <input className='understand' type="number" onChange={(e) => this.handleChange(e)} />
        <Link to='/supported'><button>Submit</button></Link>
        <br/>
        </form>
      </div>
    );
  }
}

export default connect()(UnderComp);