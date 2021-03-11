import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Login} exact={true}></Route>
          <Route path="/Registration" component={Registration} exact={true}></Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default Routing;