import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class ReviewComp extends Component {

getReview = () => {
    axios({ 
        method: 'POST',
        url: '/'
    }).then(response => {
        console.log( 'response in POST', response)
    }).catch(error => {
        console.log('error in post', error)
    })
}



    render () {
        return (
        <div>
            <h1>Review Your Feedback</h1>
              <h3>Feelings: </h3>
              <h3>Understanding: </h3>
              <h3>Support: </h3>
              <h3>Comments: </h3>

               {/* ToDo: Display Incomplete then complete when all fields filled
               <button> Complete </button> */}
        </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ReviewComp);