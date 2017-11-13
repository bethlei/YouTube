import { fetchCategories, fetchVideos } from './../utils/youtubeAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_FEATURED_CATEGORIES = 'GET_FEATURED_CATEGORIES'
export const GET_FEATURED_CATEGORY_IDS = 'GET_FEATURED_CATEGORY_IDS'
export const GET_VIDEOS = 'GET_VIDEOS'
export const GET_FEATURED_VIDEO = 'GET_FEATURED_VIDEO'
export const GET_SELECTED_VIDEO = 'GET_SELECTED_VIDEO'

export function fetchCategoriesAndVideos() {
  return dispatch =>
    fetchCategories()
      .then(data => dispatch(getCategories(data)))
      .then(data => dispatch(getFeaturedCategories(data)))
      .then(data => dispatch(getFeaturedCategoryIds(data)))
      .then(data => Promise.all([data.featuredCategoryIds.map(catId =>
        fetchVideos(catId).then(
          res => res.json(),
          error => console.log('An error occurred', error),
        ))]))
      .then(data => dispatch(getVideos(data)))
}

export function getCategories(data) {
  const dataObj = data.items.map(category => ({
    categoryId: category.id,
    title: Object.values(category.snippet.title).join(''),
  }))

  return {
    type: GET_CATEGORIES,
    categories: dataObj,
  }
}

export function getFeaturedCategories(data) {
  const dataObj = data.categories.filter((category, i) => i < 5)

  return {
    type: GET_FEATURED_CATEGORIES,
    featuredCategories: dataObj,
  }
}

export function getFeaturedCategoryIds(data) {
  const dataObj = data.featuredCategories.map(category => category.categoryId)

  return {
    type: GET_FEATURED_CATEGORY_IDS,
    featuredCategoryIds: dataObj,
  }
}

export function getVideos(data) {
  console.log('videos', data[0])

  // To do - Research
  // Promise.all on line 16 of fetchCategoriesAndVideos() returns Promises
  // rather than response objects
  // Chaining .then() didn't work on extracting response object
  // Research on other ways to do it (e.g Promise library)
  // Code below is for dispatching the video object to the Redux store - tested
  // on a single call to the API

  // const dataObj = data.items.map(video => ({
  //   videoId: video.id,
  //   categoryId: Object.values(video.snippet.categoryId).join(''),
  //   title: Object.values(video.snippet.title).join(''),
  //   description: Object.values(video.snippet.description).join(''),
  //   // thumbnail: Object.values(video.snippet.thumbnails.standard.url).join(''),
  //   player: Object.values(video.player.embedHtml).join(''),
  // }))

  return {
    type: GET_VIDEOS,
    // videos: dataObj,
    videos: data,
  }
}

export function getFeaturedVideo(data) {
  const dataObj = {}

  return {
    type: GET_FEATURED_VIDEO,
    featuredVideo: dataObj,
  }
}

export function getSelectedVideo(data) {
  const dataObj = {}

  return {
    type: GET_SELECTED_VIDEO,
    selectedVideo: dataObj,
  }
}
