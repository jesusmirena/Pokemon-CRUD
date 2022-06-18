import React from "react";
import { StyledInput } from "./styledComponents/Form.styled";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <StyledInput
        searchBar
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
