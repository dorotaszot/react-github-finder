import React, { Component } from 'react'

class Search extends Component {
state = {
  text: ''
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.searchUsers(this.state.text);
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." className="my-sm p-sm" value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block p-sm" />
        </form>
      </div>
    )
  }
}

export default Search
