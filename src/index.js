'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDmUOjne6DVTKDn2v3Uea8Y_cgipFL0I4Y';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        </div>
      );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
