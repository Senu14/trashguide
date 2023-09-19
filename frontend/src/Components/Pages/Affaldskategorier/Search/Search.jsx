import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.scss'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSearchInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearchClick = () => {
    // You can add your search logic here, for example, navigate to a search results page
    // or perform an API request with the searchQuery.
    console.log('Search clicked with query: ', this.state.searchQuery);
  };

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Søg på affald..."
          value={this.state.searchQuery}
          onChange={this.handleSearchInputChange}
        />
        <button onClick={this.handleSearchClick}>
          <FaSearch />
        </button>
      </div>
    );
  }
}

export default Search;
