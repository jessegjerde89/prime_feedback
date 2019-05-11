import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'




class ReviewComp extends Component {
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