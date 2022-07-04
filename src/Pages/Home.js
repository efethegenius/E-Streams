import React from "react";
import { PopularSeries } from "./PopularSeries";
import { TrendingMovies } from "./TrendingMovies";

import { UpcomingMovies } from "./UpcomingMovies";

import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    <div className="movies-container">
      <Navbar />
      <div className="search-container">
        <input
          placeholder="seatch for movies or tv series"
          className="search"
        />
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
  );
};
