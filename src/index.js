import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'


const userFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const states = (state = {}, action ) => {
    if (action.type === "FEELING") {
         return {action.payload}; 
    } else if ( action.type === "UNDERSTAND") {
        return {action.payload}; 
    } else if ( action.type === "SUPPORT" ) {
        return { action.payload}; 
    } else if (action.type === "COMMENTS") { 
        return {action.payload}; 
    }
    return state
}





const storeInstance = createStore ( 
    combineReducers({

        states 
    }), 
    applyMiddleware(logger)
    
)



ReactDOM.render(<Provider  store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
