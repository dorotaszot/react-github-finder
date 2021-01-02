import React, {Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/Search';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () => {
  // async componentDidMount() {
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(res.data);

  //   this.setState({users: res.data, loading: false});
  // }

    return (
      <GithubState>
        <AlertState>
          <Router>
          <div className="App">
            <Navbar />
            <div className="container">
            <Alert />

                <Switch> 
                  <Route exact path ='/' render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                  </Fragment>
                  )} />
                
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User}/>
                </Switch>
            </div>
          </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}


export default App;
