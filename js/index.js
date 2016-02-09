import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'materialize-css';
import 'materialize-js';
import { Router, Route, Link, browserHistory} from "react-router";


var About = React.createClass({
  render() {
    return (<div>
      <h1>Ay vdai</h1>
    </div>)
  }
});



ReactDOM.render((<Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
), document.getElementById('main'));
