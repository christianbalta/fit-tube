import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {VideosProvider} from './context/videos_context'
import {FilterProvider} from './context/filter_context'

ReactDOM.render(
      <VideosProvider>
        <FilterProvider>
            <App />
        </FilterProvider>
      </VideosProvider>,

  document.getElementById('root')
)
