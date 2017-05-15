import React, { Component } from 'react';
import './App.css';

import { database } from './firebase';

const articleInitialState = {
  name: '',
  quantity: 0,
  price: '0.0€'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buys: [],
      menu: [],
      newArticle: { ...articleInitialState }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({ ...snapshot.val() });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref().child('buys').push(this.state.newArticle);
    this.setState({ newArticle: { ...articleInitialState } });
  }

  handleChange(event) {
    const newArticle = this.state.newArticle;
    newArticle[event.target.name] = event.target.value;
    this.setState({ newArticle });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React - Redux - Firebase Test</h2>
        </div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="App-intro">
          <label htmlFor="name">Nombre del articulo: </label>
          <input type="text" value={this.state.newArticle.name} name="name" />
          <label htmlFor="quantity">Cantidad: </label>
          <input type="number" value={this.state.newArticle.quantity} name="quantity" />
          <button type="submit">Send</button>
        </form>
        <p>My firebase data: {JSON.stringify(this.state, null, 2)}</p>
      </div>
    );
  }
}

export default App;
