import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SupportComp extends Component {

  state = { 
    student: {
      support: ''
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
    let choice = {
      understand: student.support
    }
    this.props.dispatch({ type: 'SUPPORT', payload: choice})
  }
}



  render() {
    return (
      <div >
       <form>
        <h2>How well are you being supported ?</h2>
        <input className='support' type="number" onChange={(e) => this.handleChange(e)} />
        <Link to='/comments'><button>Submit</button></Link>
        <br/>
       </form>
      </div>
    );
  }
}

export default connect()(SupportComp);