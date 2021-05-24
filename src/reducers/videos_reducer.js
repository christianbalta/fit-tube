import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_VIDEOS_BEGIN,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
} from '../actions'

const videos_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === GET_VIDEOS_BEGIN) {
    return { ...state, videos_loading: true }
  }
  if (action.type === GET_VIDEOS_SUCCESS) {
    const featured_videos = action.payload.filter(
      (video) => video.featured === true
    )
    return {
      ...state,
      videos_loading: false,
      videos: action.payload,
      featured_videos: featured_videos,
    }
  }
  if (action.type === GET_VIDEOS_ERROR) {
    return { ...state, videos_loading: false, videos_error: true }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default videos_reducer
