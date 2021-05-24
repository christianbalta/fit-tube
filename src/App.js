import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Footer, Navbar, Sidebar} from './components'

import { Error, Home, Videos,} from './pages'

function App() {
  return (
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          {/*<Route exact path='/about'>*/}
          {/*  <About />*/}
          {/*</Route>*/}
          <Route exact path='/videos'>
            <Videos />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
  )
}

export default App
