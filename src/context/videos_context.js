import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/videos_reducer'
import { videos_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_VIDEOS_BEGIN,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  videos_loading: false,
  videos_error: false,
  videos: [],
  featured_videos: [],
}

const VideosContext = React.createContext()

export const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchVideos = async (url) => {
    dispatch({ type: GET_VIDEOS_BEGIN })
    try {
      const response = await axios.get(url)
      const videos = response.data
      dispatch({ type: GET_VIDEOS_SUCCESS, payload: videos })
    } catch (error) {
      dispatch({ type: GET_VIDEOS_ERROR })
    }
  }

  useEffect(() => {
    fetchVideos(url)
  }, [])

  return (
    <VideosContext.Provider
      value={{ ...state, openSidebar, closeSidebar }}
    >
      {children}
    </VideosContext.Provider>
  )
}
// make sure use
export const useVideosContext = () => {
  return useContext(VideosContext)
}
