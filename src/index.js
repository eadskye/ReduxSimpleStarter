'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component, should produce some HTML
//Take this component's generated HTML and put it on the page
const API_KEY = 'AIzaSyDmUOjne6DVTKDn2v3Uea8Y_cgipFL0I4Y';

const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
