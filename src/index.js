import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';


// action
const increment = () => {return { type: '+' }}
const decrement = () => {return { type: '-' }}

// reducer
const counter = (state = 0, action) => {
  if (action.type === '+') return state + 1
  if (action.type === '-') return state - 1
}

let store = createStore(counter)
// display it in the console


store.subscribe(() => console.log(store.getState()))

// dispatch
store.dispatch({type: '+'})






ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
