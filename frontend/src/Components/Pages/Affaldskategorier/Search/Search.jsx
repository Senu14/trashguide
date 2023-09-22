import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import axios from "axios";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value.trim());
  };

  const handleSearch = () => {
    onSearch(query); // Call onSearch with the current query
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Søg på affald..."
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
