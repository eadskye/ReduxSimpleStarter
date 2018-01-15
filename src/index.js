'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyDmUOjne6DVTKDn2v3Uea8Y_cgipFL0I4Y';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'pugs'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
      //this.setState({videos: videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video ={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos ={this.state.videos} />
        </div>
      );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
