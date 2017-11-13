import { connect } from 'react-redux'
import FeaturedList from './../components/FeaturedList'
import FilteredList from './../components/FilteredList'
import {
  fetchCategoriesAndVideos,
  getFeaturedVideo,
  getSelectedVideo,
} from './../actions'

const mapStateToProps = ({ featuredCategories, videos }) => ({
  featuredCategories,
  videos,
})

const mapDispatchToProps = {
  fetchCategoriesAndVideos,
  getFeaturedVideo,
  getSelectedVideo,
}

export const VideoFeaturedList = connect(mapStateToProps, mapDispatchToProps)(FeaturedList)

export const VideoFilteredList = connect(mapStateToProps, mapDispatchToProps)(FilteredList)
