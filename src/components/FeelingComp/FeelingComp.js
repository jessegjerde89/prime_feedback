import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import LinkButton from '../LinkButton' 

class FeelingComp extends Component {

state = {
  student: {
    feeling: ''
  }
}


handleChange = (newVal, event) => {
  this.setState({
    student: {
      ...this.state.student, 
      [newVal]: event.target.value
    }
   })
 }

handleSubmit = (event) => {
  event.preventDefault(); 
  this.sendToReview(this.state.student)
}

sendToReview = (student) => {
let rating = {
  feeling: student.feeling
}

this.props.dispatch({type: 'FEELING', payload: rating})
}

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit} >
            <h2>How are you feeling today ?</h2>
            {/* <input className="feeling" type="number" value= {this.props.feeling} onChange={() => this.handleChange()} /> */}
            <input className="feeling" type="number" onChange={(e) => this.handleChange(e)} />
            <Link to='/understanding'><button type="submit" >Submit</button> </Link>
           
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
  export default connect(mapToReduxState)(FeelingComp);