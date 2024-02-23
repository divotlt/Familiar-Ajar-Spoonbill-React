import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Prompts from './views/prompts'
import Page from './views/page'
import Index from './views/index'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Prompts} exact path="/prompts" />
        <Route component={Page} path="**" />
        <Route component={Index} exact path="/" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
