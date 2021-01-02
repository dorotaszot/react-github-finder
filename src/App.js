import React, {Fragment, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/Search';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import axios from 'axios';
import PropTypes from 'prop-types';
import GithubState from './context/github/GithubState';


const App = () => {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(res.data);

  //   this.setState({users: res.data, loading: false});
  // }


  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false)
    console.log(res);
  } 

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

    return (
      <GithubState>
        <Router>
        <div className="App">
          <Navbar />
          <div className="container">
          <Alert alert={alert}/>

              <Switch> 
                <Route exact path ='/' render={props => (
                  <Fragment>
                    <Search  
                    setAlert={showAlert} />
                    <Users />
                </Fragment>
                )} />
              </Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render= { props => (
                <User {...props} getUserRepos={getUserRepos} repos={repos}/>
              )} />
          </div>
        </div>
        </Router>
      </GithubState>
    );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

export default App;
