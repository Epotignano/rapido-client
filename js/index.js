import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import reducers from './reducers'

import 'materialize-css';
import 'materialize-js';

import { App, About } from "./containers/index";
import { Home } from "./components/components.index";

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)




