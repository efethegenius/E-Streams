import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../Components/useFetch";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { Search } from "./Search";

export const Movies = () => {
  const { nowPlayingPage, setNowPlayingPage } = useContext(AuthContext);
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=${nowPlayingPage}`;
  const img_path = "https://image.tmdb.org/t/p/w1280";

  const { loading, data } = useFetch(url);
  return (
    <div className="movies-container">
      <Navbar />
      <div className="movie-wrapper">
        <Search />
        <div className="title-container">
          <h3>Now Playing</h3>
        </div>
        <div className="series-container">
          {data.map((movie) => {
            const { poster_path, id, backdrop_path, release_date, title } =
              movie;
            const newDate = new Date(release_date);
            return (
              <Link to={`/now_playing/${id}`} className="show-link">
                <div key={id} className="series">
                  <img src={img_path + poster_path} alt="movie" />
                  <div className="show-details">
                    <p>{newDate.getFullYear()}</p>
                    <h4>{title}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="page">
          <button
            onClick={() => {
              if (nowPlayingPage === 1) {
                return;
              } else {
                setNowPlayingPage(nowPlayingPage - 1);
              }
            }}
          >
            -
          </button>
          <p>Page: {nowPlayingPage}</p>
          <button onClick={() => setNowPlayingPage(nowPlayingPage + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
