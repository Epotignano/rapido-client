import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import 'flexboxgrid';
import {reducer as formReducer} from 'redux-form';
import reducers from './reducers'

import {renderDevTools} from './utils/devTools';

import { App, Home, Login } from "./containers/index";

const appReducers = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
  form: formReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(appReducers);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(<div>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Login}>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>
</div>, document.getElementById('main'));
