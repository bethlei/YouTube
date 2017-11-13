import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer'
import VideoCategoryList from './VideoCategoryList'

class VideoDetails extends Component {
  render() {
    return (
      <div className="filtered-category">
        <div>Video Details</div>
        <VideoPlayer />
        <VideoCategoryList />
      </div>
    )
  }
}

export default VideoDetails
