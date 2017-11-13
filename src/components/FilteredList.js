import React, { Component } from 'react'
import Category from './Category'
import VideoPlayer from './VideoPlayer'
import VideoCategoryList from './VideoCategoryList'

class FiltredList extends Component {
  render() {
    return (
      <div className="filtered-category">
        <Category />
        <VideoPlayer />
        <VideoCategoryList />
      </div>
    )
  }
}

export default FiltredList
