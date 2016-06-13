import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

import App from './components/App'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

render((
  <Router history={browserHistory}>
  	<Route path='/' component={App}>
  		<IndexRoute component={Dashboard} />
  		<Route path='*' component={NotFound} />
  	</Route>
  </Router>
), document.getElementById('app'))
