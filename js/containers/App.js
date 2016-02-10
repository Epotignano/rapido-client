import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import AppBar from 'material-ui/lib/app-bar';

const styles = {
  container: {
    margin: -10
  },

  content: {
    padding: "1.5em"
  }

};

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <AppBar
            title="Rapido"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
        <div style={styles.content}>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(
  null,
  routeActions
)(App)
