/**
 * Created by epotignano on 10/02/16.
 */

import React from 'react';
import {reduxForm} from 'redux-form';
import {Paper} from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
var styles = {
  container: {
    backgroundColor: Colors.purple500
  },

  panel : {
    backgroundColor: Colors.cyan500,
    panelContainer:10

  }
};


export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit() {
    console.log('Called');
  }
  render() {
    const {fields: {username, password}, handleSubmit} = this.props;

    return(
      <div className="row around-xs" style={styles.container}>
        <Paper className="col-md-6" zDepth={3}>
          <div style={styles.panel} className="row">
            <h1 className="text-center">LOGIN</h1>
          </div>

          <form className="box" onSubmit={this.handleSubmit}>
            <div className="row">
              <label className="col-md-12">First Name</label>
              <input className="col-md-12" type="text" placeholder="First Name" {...username}/>
            </div>
            <div className="row">
              <label className="col-md-12">Last Name</label>
              <input className="col-md-12" type="text" placeholder="Last Name" {...password}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Paper>
      </div>
    )
  }
}
Login = reduxForm({
  form : 'login',
  fields: ['username', 'password']
})(Login);

