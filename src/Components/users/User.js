import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({user, loading, repos, getUser, getUserRepos, match}) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

    const { login, location, hireable, html_url, avatar_url, name, blog, bio, company, public_repos, public_gists, following, followers } = user;

    if (loading) return<Spinner />

    return (
        <Fragment>
          <Link to='/' className='btn light-background p-sm my-sm mx-sm'>
            Back to search
          </Link>
            Hireable {' '} 
            {hireable ? (<i className='fas fa-check green' />) : (<i className='fas fa-times-circle red'/>)}
        
          <div className="card user-details-wrapper">
            <div className="user-card-left">
              <img src={avatar_url} alt="" className='img-rounded my-sm' style={{width:'200px'}}/>
              <h3>{name}</h3>
              <p className="my-sm">Location:{' '}{location}</p>
            </div>

            <div className="user-card-right">
              {bio && (
                <Fragment>
                  <p className='my-sm'>Bio: </p>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a className='btn black-background p-sm my-sm' href={html_url}>Visit Github Profile</a>
              <ul>
                <li className='my-sm'>
                  {login && 
                    <Fragment>
                      Username: {login}
                    </Fragment>}
                </li>
                <li className='my-sm'>
                  {company && 
                    <Fragment>
                      Company: {company}
                    </Fragment>}
                </li>
                <li className='my-sm'>
                  {blog && 
                    <Fragment>
                      Website: <a href={blog}>{blog}</a>
                    </Fragment>}
                </li>
              </ul>
            </div>
          </div>
        
        <div className="card badges-wrap">
          <div className="badge light-background">Followers: {followers}</div>
          <div className="badge green-background">Following: {following}</div>
          <div className="badge black-background">Public Repos: {public_repos}</div>
          <div className="badge red-background">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos}/>
      </Fragment>
    )
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
}

export default User
