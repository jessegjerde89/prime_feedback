import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UnderComp extends Component {

state = {
    understand: ''
  
}

handleChange = ( event) => {
  this.setState({
    understand : event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault(); 
  this.sendToReview(this.state.understand)
  this.props.dispatch({ type: 'UNDERSTAND', payload: this.state.understand})
}

// sendToReview = (student) => {
//   let view = {
//     understand: student.understand
//   }
//   this.props.dispatch({ type: 'UNDERSTAND', payload: view})
// }




  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
        <h2>How well are you understanding the content ?</h2>
        <input className='understand' type="number" min="1" max="5" onChange={this.handleChange} />
        <Link to='/supported'><button>Submit</button></Link>
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
export default connect(mapToReduxState)(UnderComp);