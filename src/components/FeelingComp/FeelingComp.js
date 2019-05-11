import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import LinkButton from '../LinkButton' 

class FeelingComp extends Component {

state = {
  student : {
    feeling: 0
  }
}


handleChange = (event) =>{
  this.setState ({
    feeling: event.targe.value
   })
 }

handleClick = (event) => {
  event.prevendDefault(); 
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
            <h2>How are you feeling today ?</h2>
            <input className="feeling" type="number" onChange={() => this.handleChange('')} />
            <Link to='/understanding'><button onClick={this.handleClick} >Submit</button></Link>
            <br/>
          </div>
        );
      }
    }
    

export default connect()(FeelingComp);