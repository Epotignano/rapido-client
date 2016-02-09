import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link, Router} from "react-router";
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Un Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <h1 className={styles.text}>Welcome {title}!</h1>
        <div>
          <a className="waves-effect waves-light btn">Stuff</a>
        </div>
        <div className="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
        <button className="waves-effect waves-circle btn" onClick={e => actions.changeTitle(prompt())}>
          X
        </button>
        <button onClick={e => actions.callEmiliano()}>
          Call Emiliano
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
