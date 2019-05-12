import React, { Component } from 'react';
import { connect } from 'react-redux'



class CommentsComp extends Component {

state = { 
  comments: ''
}


handleChange = (event) => {
  this.setState({
      comments: event.target.value
   })
 }


handleSubmit = (event) =>{
  event.preventDefault(); 
  this.props.dispatch({ 
    type: 'COMMENTS', payload: this.state.comments }); 
    this.props.history.push('/review'); 
 
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2> Any comments you want to leave? </h2>
          <input placeholder='Comments' type="text" onChange={this.handleChange}  />
      <button> Submit </button>
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
export default connect(mapToReduxState)(CommentsComp);