import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_VIDEOS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_VIDEOS,
  UPDATE_FILTERS,
  FILTER_VIDEOS,
  CLEAR_FILTERS,
} from '../actions'
import { useVideosContext } from './videos_context'

const initialState = {
  filtered_videos: [],
  all_videos: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    channel: 'all',
    category: 'all',
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { videos } = useVideosContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_VIDEOS, payload: videos })
  }, [videos])

  useEffect(() => {
    dispatch({ type: FILTER_VIDEOS })
    dispatch({ type: SORT_VIDEOS })
  }, [videos, state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  const updateSort = (e) => {
    // for demonstration
    // const name = e.target.name
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }
  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
