import React, { Component } from 'react';
import { connect } from 'react-redux'



class Success extends Component {




handleSubmit = (event) =>{
  event.preventDefault(); 
  this.props.history.push('/')
  
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2> Thank you for your submission !</h2>
          <input placeholder='Comments' type="text" onChange={this.handleChange}  />
          <button type='submit' > Another Review </button>
        <br/>
        </form>
      </div>
    );
  }
}


export default connect()(Success );