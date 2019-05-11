import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import LinkButton from '../LinkButton' 

class FeelingComp extends Component {

handleClick = (event) =>{
  event.preventDefault(); 
 
}




    render() {
        return (
          <div>
            <h2>How are you feeling today ?</h2>
            <input className="feeling" type="number" />
            <Link to='/understanding'><button>Submit</button></Link>
            <br/>
          </div>
        );
      }
    }
    

export default connect()(FeelingComp);