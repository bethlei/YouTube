import React, { Component } from 'react'
import Category from './Category'
import VideoPlayer from './VideoPlayer'
import VideoCategoryList from './VideoCategoryList'

class FeaturedList extends Component {
  render() {
    const { featuredCategories } = this.props

    return (
      <div className="featured-section">
        <Category featuredCategories={featuredCategories} />
        <VideoPlayer />
        <VideoCategoryList />
      </div>
    )
  }
}

export default FeaturedList
