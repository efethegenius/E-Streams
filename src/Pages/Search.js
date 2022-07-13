import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

export const Search = () => {
  const [search, setSearch] = useState("");
  const { searchTerm, setSearchTerm } = useContext(AuthContext);

  return (
    <div className="search-container">
      <div class="form">
        <input
          class="input"
          placeholder="Search for Movies or TV series"
          required=""
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span class="input-border"></span>
      </div>
      <span class="input-border"></span>
      <Link to="/result">
        <button
          onClick={() => {
            setSearchTerm(search);
          }}
        >
          Search
        </button>
      </Link>
    </div>
  );
};
