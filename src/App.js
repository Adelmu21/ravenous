import React from 'react';
import './App.css';

import BusinessList from '../src/BusinessList';
import SearchBar from '../src/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}


export default App;
