

// import Search from "../../../Assets/Layout/icon-search.svg";
// import "./SearchBar.scss";

// const SearchBar = () => {
//   return (
//     <>
//       <div className="wrapper">
//         <div className="searchBar">
//           <div className="searchBoxWithIcon">
//             <input
//               type="text"
//               placeholder="Søg på affald"
//               className="searchBox"
//             />
//             <button
//               id="searchSubmit"
//               type="submit"
//               name="searchSubmit"
//               className="searchIcon"
//             >
//               <img src={Search} alt="search_submit" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchBar;







//Import necessary dependencies and styles
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.scss'

// Define the Search component as a class component
class Search extends React.Component {
  constructor(props) {
    super(props);

// Initialize the component's state with an empty searchQuery
    this.state = {
      searchQuery: '',
    };
  }

// Event handler for changes in the input field
  handleSearchInputChange = (e) => {
 // Update the searchQuery state with the value from the input field
    this.setState({ searchQuery: e.target.value });
  };

  handleSearchClick = () => {
  

    
    console.log('Search clicked with query: ', this.state.searchQuery);
  };

// Render the Search component
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
