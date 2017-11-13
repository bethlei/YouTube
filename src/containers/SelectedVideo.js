import { connect } from 'react-redux'
import VideoDetails from './../components/VideoDetails'
import {
  fetchCategoriesAndVideos,
  getFeaturedVideo,
  getSelectedVideo,
} from './../actions'

const mapStateToProps = (featuredCategories, videos) => ({
  featuredCategories,
  videos,
})

const mapDispatchToProps = {
  fetchCategoriesAndVideos,
  getFeaturedVideo,
  getSelectedVideo,
}

export const SelectedVideo = connect(mapStateToProps, mapDispatchToProps)(VideoDetails)
