import React, { Component } from 'react';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import './App.css';
import Navbar from './Components/layout/Navbar';
import axios from 'axios';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(res.data);

  //   this.setState({users: res.data, loading: false});
  // }

  searchUsers = async (text) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    console.log(res);
    this.setState({users: res.data.items, loading: false});
  }

  clearSearch = () => {
   this.setState({ users: [], loading: false }); 
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} 
          clearSearch={this.clearSearch} 
          showClear={this.state.users.length > 0 ? true : false}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

export default App;
