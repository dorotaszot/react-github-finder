import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const { login, location, hireable, html_url, avatar_url, name, blog, bio, company, public_repos, public_gists, following, followers } = this.props.user;
    const {loading} = this.props;

    if (loading) <Spinner />

    return (
      <div>
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
        </Fragment>
        <div className="card badges-wrap">
          <div className="badge light-background">Followers: {followers}</div>
          <div className="badge green-background">Following: {following}</div>
          <div className="badge black-background">Public Repos: {public_repos}</div>
          <div className="badge red-background">Public Gists: {public_gists}</div>


        </div>
      </div>
      
    )
  }
}

export default User
