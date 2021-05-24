import {
  LOAD_VIDEOS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_VIDEOS,
  UPDATE_FILTERS,
  FILTER_VIDEOS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_VIDEOS) {

    return {
      ...state,
      all_videos: [...action.payload],
      filtered_videos: [...action.payload],
      filters: { ...state.filters },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_VIDEOS) {
    const { sort, filtered_videos: filtered_videos } = state
    let tempVideos = [...filtered_videos]

    if (sort === 'name-a') {
      tempVideos = tempVideos.sort((a, b) => {
        return a.channel.localeCompare(b.channel)
      })
    }
    if (sort === 'name-z') {
      tempVideos = tempVideos.sort((a, b) => {
        return b.channel.localeCompare(a.channel)
      })
    }
    return { ...state, filtered_videos: tempVideos }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_VIDEOS) {
    const { all_videos } = state
    const { text, category, channel} = state.filters

    let tempVideos = [...all_videos]
    // filtering
    // text
    if (text) {
      tempVideos = tempVideos.filter((video) => {
        return video.channel.toLowerCase().startsWith(text)
      })
    }
    // category
    if (category !== 'all') {
      tempVideos = tempVideos.filter(
        (video) => video.category === category
      )
    }

    // company
    if (channel !== 'all') {
      tempVideos = tempVideos.filter(
        (video) => video.channel === channel
      )
    }

    return { ...state, filtered_videos: tempVideos }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        channel: 'all',
        category: 'all',
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
