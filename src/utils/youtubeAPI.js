const API_KEY = 'AIzaSyBU1IOsGsgh89t2ByvK9zJd4EsKRRrHmms'
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const CATEGORY_URL = `${BASE_URL}/videoCategories?key=${API_KEY}&part=snippet&regionCode=US`

export const fetchCategories = () =>
  fetch(CATEGORY_URL)
    .then(
      res => res.json(),
      error => console.log('An error occurred', error),
    )

export const fetchVideos = catId =>
  fetch(`${BASE_URL}/videos?key=${API_KEY}&chart=mostPopular&regionCode=US&part=snippet,player&videoCategoryId=${catId}&maxResults=20`)
// .then(
//   res => res.json(),
//   error => console.log('An error occurred', error),
// )

// .then() block was moved to fetchCategoriesAndVideos() on actions/index.js
// and chained on Promise.all() 
