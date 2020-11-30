import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

  render() {
    return (
      <div className="users-grid">
        
        {this.props.users.map(user => (
          <UserItem user={user}/>
        ))}
       
      </div>
    )
  }
}

export default Users
