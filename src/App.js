import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

import MyHome from './containers/MyHome'
import MyAbout from './containers/MyAbout'

class App extends Component {
  constructor(props) {
    super(props)

    document.title = 'My Profile'
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">My Profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={1} href="/portfolio">
              Portfolio
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact
            path="/"
            render={() => (
              <MyHome history={this.props.history} />
            )}
          />
          <Route path="/about"
            render={() => (
              <MyAbout history={this.props.history} />
            )}
          />
          <Route path="/portfolio"
            render={() => (
              <MyPortfolio history={this.props.history} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
