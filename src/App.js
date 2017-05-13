import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({data: snapshot.val()});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React - Redux - Firebase Test</h2>
        </div>
        <p className="App-intro">
          My firebase data: { JSON.stringify(this.state.data, null, 2) }
        </p>
      </div>
    );
  }
}

export default App;
