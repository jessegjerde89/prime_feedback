import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router';
import {Button} from '@material-ui/core'; 


class ReviewComp extends Component {




handleClick = () =>{

    axios.post('/feedback', this.props.feedback )
      .then(response => {
        console.log( 'response in POST', response)
    }).catch(error => {
        console.log('error in post', error)
    })
    this.props.history.push('/success');
    
}

    
// handleClick = () =>{

//     this.props.history.push('/success'); 
// }

    render () {
        let displayButton = '' 
        console.log(this.props.feedback)

        if ( this.props.feedback.feeling === '' || 
            this.props.feedback.understand === '' ||
            this.props.feedback.support === '' ||
            this.props.feedback.comments === '' ) {

            displayButton = (<button disabled className="mdc-button mdc-button--raised"> Complete </button>)
        } else {
            displayButton = (<button className="mdc-button mdc-button--raised" onClick={this.handleClick}> Complete </button>)
        }




        return (
        <div>
            <h1>Review Your Feedback</h1>
              <h3>Feelings: {this.props.feedback.feeling}</h3>
              <h3>Understanding: {this.props.feedback.understand}</h3>
              <h3>Support: {this.props.feedback.support}</h3>
              <h3>Comments: {this.props.feedback.comments}</h3>

               {/* ToDo: Display Incomplete then complete when all fields filled  */}
               {displayButton}
        </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
   
        feedback: reduxState.statesReducer

  });
  
  export default withRouter(connect(mapReduxStateToProps)(ReviewComp));