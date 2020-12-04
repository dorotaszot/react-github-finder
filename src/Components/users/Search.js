import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
state = {
  text: ''
}

onSubmit = (e) => {
  e.preventDefault();
  if(this.state.text === '') {
    this.props.setAlert('Please enter something', 'light-background')
  } else {
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}

  render() {
  const { showClear, clearSearch } = this.props; 

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." className="my-sm p-sm" value={this.state.text} onChange={this.onChange}/>
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
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
