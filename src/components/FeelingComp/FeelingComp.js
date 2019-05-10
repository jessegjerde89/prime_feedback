import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'




class FeelingComp extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't Forget Your Feedback !</i></h4>
           
            </header>
            <h2><i>How are you feeling today ?</i></h2>
            <input className="feeling" type="number" />
            <button>Submit</button>
            <br/>
          </div>
        );
      }
    }
    

export default connect()(FeelingComp);