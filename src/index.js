'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
//Create a new component, should produce some HTML
//Take this component's generated HTML and put it on the page
const API_KEY = 'AIzaSyDmUOjne6DVTKDn2v3Uea8Y_cgipFL0I4Y';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
