import React, { Component } from 'react'

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://api.github.com/users/mojombo'
  }

  render() {
    const {login, avatar_url, html_url} = this.state;

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="img-rounded" style={{width:"60px"}}/>
        <p className="my-sm">{login}</p>
        <div>

        <a href={html_url} className="btn btn-dark p-sm">More</a>
        </div>
      </div>
    )
  }
}

export default UserItem
