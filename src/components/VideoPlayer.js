import React from 'react'

const VideoPlayer = props => {
  return (
    <div className="video-player-wrapper">
      <div className="video-player">
        <iframe title="abc" className="video-iframe" />
      </div>
      <div className="video-player-title">Video Player Title</div>
    </div>
  )
}

export default VideoPlayer
