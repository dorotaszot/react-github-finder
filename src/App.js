import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import axios from 'axios';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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

  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type} });
    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000);
  }

  render() {
  const { users, loading } = this.state;

    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={this.state.alert}/>

            <Switch> 
              <Route exact path ='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} 
                  clearSearch={this.clearSearch} 
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert} />
                  <Users loading={loading} users={users}/>
               </Fragment>
              )} />
            </Switch>
            <Route exact path='/about' component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

export default App;
