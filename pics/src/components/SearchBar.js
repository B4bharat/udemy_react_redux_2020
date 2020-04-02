import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Arrow function ALWAYS binds the 'this' to the parent.
  // Array function ALWAYS binds the 'this' to the parent.
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='search'>Image Search</label>
            <input
              type='text'
              name='search'
              id='search'
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
