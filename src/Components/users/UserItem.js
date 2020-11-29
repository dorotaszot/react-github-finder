import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url, html_url}}) => {

    return (
        <div className="card text-center">
          <img src={avatar_url} alt="" className="img-rounded" style={{width:"60px"}}/>
          <p className="my-sm">{login}</p>
          <a href={html_url} className="btn btn-dark p-sm">More</a>
        </div>
    )
  }

  UserItem.propTypes = {
    user: PropTypes.object.isRequired,
  }

export default UserItem
