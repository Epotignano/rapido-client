import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileActions from '../actions/ProfileActions';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(ProfileActions, dispatch);
    return (
      <main>
        <h1 className={styles.text}>Welcome {title}!</h1>
        <div>
          <a class="waves-effect waves-light btn">Stuff</a>
        </div>

        <div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>

        <button onClick={e => actions.UpdateProfile(prompt())}>
          Update Somos nosotros pa
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
