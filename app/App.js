import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

export default () => (
  <div>
    <Router>
      <div>
        <Header />
        <hr />
        <div className="app-container">
          <Route
              component={Home}
              exact
              path="/"
          />
          <Route
              component={Login}
              exact
              path="/auth"
          />
          <Route
              component={About}
              exact
              path="/about"
          />
        </div>
      </div>
    </Router>
  </div>
)
