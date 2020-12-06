import React, { Component } from 'react'

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {login, location} = this.props.user;
    const {loading} = this.props;
    return (
      <div>
       {login}
      </div>
    )
  }
}

export default User
