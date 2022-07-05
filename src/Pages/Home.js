import React from "react";
import { PopularSeries } from "./PopularSeries";
import { TrendingMovies } from "./TrendingMovies";

import { UpcomingMovies } from "./UpcomingMovies";

import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    <div className="movies-container">
      <Navbar />
      <div className="movie-wrapper">
        <div className="search-container">
          <div class="form">
            <input
              class="input"
              placeholder="Search for Movies or TV series"
              required=""
              type="text"
            />
            <span class="input-border"></span>
          </div>
          <span class="input-border"></span>
        </div>
        <div className="title-container">
          <h3>Trending</h3>
        </div>

        <TrendingMovies />
        <div className="title-container">
          <h3>Popular Series</h3>
        </div>

        <PopularSeries />
        <div className="title-container">
          <h3>Upcoming Movies</h3>
        </div>

        <UpcomingMovies />
      </div>
    </div>
  );
};
