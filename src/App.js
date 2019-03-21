import React, { Component } from 'react';
import { TopButtons, ViewSettings, List, AddForm } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="app">
          <TopButtons />
          <ViewSettings />
          <List />
          <AddForm />
        </div>
    );
  }
}

export default App;
