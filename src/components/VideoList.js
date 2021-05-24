import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const VideoList = () => {
  const { filtered_videos: videos, grid_view } = useFilterContext()
  if (videos.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no videos matched your search...
      </h5>
    )
  }
  if (grid_view === false) {
    return <ListView videos={videos} />
  }
  return <GridView videos={videos}>video list</GridView>
}

export default VideoList
