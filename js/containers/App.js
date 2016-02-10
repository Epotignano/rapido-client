import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import FloatButton from "react-mfb"
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';

import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import Face from 'material-ui/lib/svg-icons/action/face';
import Build from 'material-ui/lib/svg-icons/action/build';

const styles = {
  container: {
    margin: -10
  },
  content: {
    padding: "1.5em"
  },
  menu: {
    marginBottom: 32,
    flexDirection: 'column',
    flex:1,
    position: 'relative',
    zIndex: 0,
    alignSelf: 'stretch'
  },

  leftMenuItem : {
    alignSelf: 'stretch'
  }
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:true
    }
  }

  navigateToFoo(){
    this.props.push("foo")
  }

  render() {
    return (
      <div style={styles.container}>
        <div>
          <LeftNav open={this.state.open}>
            <AppBar title="Rapido" iconClassNameLeft={null}/>
            <Menu style={styles.menu}>
              <MenuItem style={styles.leftMenuItem } onTouchTap={this.navigateToFoo.bind(this)} primaryText="Equipos" leftIcon={<Face />} />
              <MenuItem style={styles.leftMenuItem } primaryText="Trabajos" leftIcon={<Build/>} />
            </Menu>
          </LeftNav>
          <AppBar
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
