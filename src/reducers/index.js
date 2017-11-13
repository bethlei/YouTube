import { combineReducers } from 'redux'
import { GET_CATEGORIES,
  GET_FEATURED_CATEGORIES,
  GET_VIDEOS,
  GET_FEATURED_VIDEO,
  GET_SELECTED_VIDEO } from './../actions'

const initialState = {
  categories: {},
  featuredCategories: {},
  videos: {},
  featuredVideo: {},
  selectedVideo: {},
}

function categories(state = initialState.categories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories

    default:
      return state
  }
}

function featuredCategories(state = initialState.featuredCategories, action) {
  switch (action.type) {
    case GET_FEATURED_CATEGORIES:
      return action.featuredCategories

    default:
      return state
  }
}

function videos(state = initialState.videos, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return [...action.videos, ...state]

    default:
      return state
  }
}

function featuredVideo(state = initialState.selectedVideo, action) {
  switch (action.type) {
    case GET_FEATURED_VIDEO:
      return [action.featuredVideo, ...state]

    default:
      return state
  }
}

function selectedVideo(state = initialState.selectedVideo, action) {
  switch (action.type) {
    case GET_SELECTED_VIDEO:
      return [action.selectedVideo, ...state]

    default:
      return state
  }
}

export default combineReducers({
  categories,
  featuredCategories,
  videos,
  featuredVideo,
  selectedVideo,
})
