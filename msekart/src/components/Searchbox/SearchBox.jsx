import React from "react";
import "./Searchbox.css";

const SearchBox = ({ inputchange }) => {
  return (
    <div className="searchBox">
      <input
        onChange={(event) => inputchange()}
        placeholder="SEARCH HERE"
        className="search-inp"
      ></input>
    </div>
  );
};

export default SearchBox;
