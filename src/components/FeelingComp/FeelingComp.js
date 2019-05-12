import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import LinkButton from '../LinkButton' 

class FeelingComp extends Component {

state = {
    feeling: ''
  }



handleChange = ( event) => {
  this.setState({
      feeling: event.target.value
    
   })
 }

handleSubmit = (event) => {
  event.preventDefault(); 
  this.props.dispatch({type: 'FEELING', payload: this.state.feeling})
  this.props.history.push('/understanding')
}

// sendToReview = (student) => {
// let rating = {
//   feeling: student.feeling
// }

    render() {
        return (
          <div>
           
            <form onSubmit={this.handleSubmit} >
            <h2>How are you feeling today ?</h2>
            <input className="feeling" type="number" min='1' max='5' onChange={this.handleChange} />
            {/* <input className="feeling" type="number" onChange={(e) => this.handleChange(e)} /> */}
            {/* <Link to='/understanding'><button type="submit" >Submit</button> </Link> */}
            <button type="submit" >Submit</button>
           
            <br/>
            </form>
          </div>
        );
      }
    }
    

    const mapToReduxState = (reduxState) => {
      return {
         feeling : reduxState.feeling
      }
  }
  export default connect(mapToReduxState)(FeelingComp);