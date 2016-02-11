/**
 * Created by epotignano on 10/02/16.
 */

import React from 'react';
import {reduxForm} from 'redux-form';

var styles = {
  container: {
    "flexDirection" : "row"
  },
  column: {
    flex:1
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
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" {...username}/>
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" {...password}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="col-md-8">
          <img className="col-md-12" src={require("../../images/Origami-crane.jpg")} alt="Origami crane"/>
        </div>
      </div>
    )
  }
}
Login = reduxForm({
  form : 'login',
  fields: ['username', 'password']
})(Login);

