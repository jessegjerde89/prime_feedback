
import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Header extends Component {
    render() {
        return (


<header className="App-header">
    <h1 className="App-title">Feedback!</h1>
        <h4><i>How are you feeling today ?</i></h4>
       
</header>

        )
    }
}

export default connect()(Header)