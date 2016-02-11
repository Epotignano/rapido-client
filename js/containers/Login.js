/**
 * Created by epotignano on 10/02/16.
 */

import React from 'react';

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

  render() {
    return(
      <div className="row">
        <div className="col-md-4">
          <h1>Here goes the form</h1>
        </div>
        <div className="col-md-8">
          <img className="col-md-12" src={require("../../images/Origami-crane.jpg")} alt="Origami crane"/>
        </div>
      </div>
    )
  }
}



