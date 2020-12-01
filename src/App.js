import React, { Component } from 'react';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import './App.css';
import Navbar from './Components/layout/Navbar';
import axios from 'axios';

class App extends Component {
state = {
  users: [],
  loading: false
}

  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);

    this.setState({users: res.data, loading: false});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
