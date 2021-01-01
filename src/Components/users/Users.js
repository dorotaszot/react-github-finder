import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
 
const Users = () => {
  const githubContext = useContext(GithubContext);

  const {loading, users} = githubContext;
  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="users-grid">
        
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
       
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Users
