import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({showClear, clearSearch, setAlert}) => {
    const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      setAlert('Please enter something', 'light-background')
    } else {
      searchUsers(text);
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
        {showClear && 
          <button className="btn btn-block btn-light p-sm my-sm" style={{ color: '#000'}} onClick={clearSearch}>
            Clear
          </button>
        }
    
      </div>
    )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
