import React from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div>
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
