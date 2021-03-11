import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Mynavbar';
import Routing from './components/Routing'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
      <Mynavbar/>
      <Routing/>
      </div>

    );

  }

}
export default App;
