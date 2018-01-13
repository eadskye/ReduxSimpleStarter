//Create a new component, should produce some HTML
//Take this component's generated HTML and put it on the page

import React from 'react';
import ReactDOM from 'react-dom';
const App = function(){
  return <div>Hi!</div>;
}

ReactDOM.render(App);
