import React from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <p>SearchBar</p>
      <input
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
