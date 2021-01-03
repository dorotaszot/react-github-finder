import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const {setAlert} = alertContext;
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      setAlert('Please enter something', 'light-background')
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." className="my-sm p-sm" value={text} onChange={onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block p-sm" />
        </form>
        {githubContext.users.length > 0 && 
          <button className="btn btn-block btn-light p-sm my-sm" style={{ color: '#000'}} onClick={githubContext.clearUsers}>
            Clear
          </button>
        }
    
      </div>
    )
}

export default Search
