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
 
  this.props.dispatch({ type: 'UNDERSTAND', payload: this.state.understand})
  this.props.history.push('/supported'); 
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
        <button type="submit">Submit</button>
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