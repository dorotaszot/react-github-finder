import React, { Component } from 'react';
import UserItem from './Components/users/UserItem';
import './App.css';
import Navbar from './Components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
