import React, { Component } from 'react';

class UserItem extends Component {

  render() {
    const {login, avatar_url, html_url} = this.props.user;

    return (
        <div className="card text-center">
          <img src={avatar_url} alt="" className="img-rounded" style={{width:"60px"}}/>
          <p className="my-sm">{login}</p>
          <a href={html_url} className="btn btn-dark p-sm">More</a>
        </div>
    )
  }
}

export default UserItem
