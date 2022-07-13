import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../Components/useFetch";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Search } from "./Search";

export const Searches = () => {
  const { searchTerm, setSearchTerm } = useContext(AuthContext);
  const url = `https://api.themoviedb.org/3/search/multi?api_key=04c35731a5ee918f014970082a0088b1&query=${
    searchTerm ? searchTerm : "avengers"
  }`;
  const img_path = "https://image.tmdb.org/t/p/w1280";

  const { loading, data } = useFetch(url);
  const filtered = data.filter((filter) => filter.backdrop_path);
  console.log(filtered);
  return (
    <div className="movies-container">
      <Navbar />
      <div className="movie-wrapper">
        <Search />
        <div className="title-container">
          <h3>Result</h3>
        </div>
        <div className="series-container">
          {filtered.map((movie) => {
            const {
              poster_path,
              id,
              backdrop_path,
              release_date,
              title,
              original_name,
              first_air_date,
            } = movie;
            const newDate = new Date(release_date);
            const newDate2 = new Date(first_air_date);
            return (
              <Link
                to={title ? `/movie/${id}` : `/tv-series/${id}`}
                className="show-link"
              >
                <div key={id} className="series">
                  <img src={img_path + poster_path} alt="movie" />
                  <div className="show-details">
                    <p>
                      {release_date
                        ? newDate.getFullYear()
                        : newDate2.getFullYear()}
                    </p>
                    <h4>{title ? title : original_name}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
