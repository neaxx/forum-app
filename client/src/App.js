import React, { Component } from 'react';
import './App.css';
import ThreadsPage from './pages/components/ThreadsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bienvenido a forum app</h1>
        </header>
        <ThreadsPage  />
      </div>
    );
  }
}

export default App;
