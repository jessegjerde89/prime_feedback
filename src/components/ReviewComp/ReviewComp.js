import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class ReviewComp extends Component {




handleClick = () =>{

    axios.post('/feedback', this.props.feedback )
      .then(response => {
        console.log( 'response in POST', response)
        this.props.history.push('/success'); 
    }).catch(error => {
        console.log('error in post', error)
    })

}

handleClick = () =>{

    this.props.history.push('/success'); 
}

    render () {
        console.log(this.props.feedback)
        return (
        <div>
            <h1>Review Your Feedback</h1>
              <h3>Feelings: {this.props.feedback.feeling}</h3>
              <h3>Understanding: {this.props.feedback.understand}</h3>
              <h3>Support: {this.props.feedback.support}</h3>
              <h3>Comments: {this.props.feedback.comments}</h3>

               {/* ToDo: Display Incomplete then complete when all fields filled  */}
               <button disabled = {!this.props.isFilled} onClick={this.handleClick}> Complete </button> 
        </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
   
        feedback: reduxState.statesReducer

  });
  
  export default connect(mapReduxStateToProps)(ReviewComp);