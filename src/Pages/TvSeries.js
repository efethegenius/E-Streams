import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { useFetch } from "../Components/useFetch";
import { AuthContext } from "../helpers/AuthContext";
import { Search } from "./Search";

export const TvSeries = () => {
  const { airingPage, setAiringPage } = useContext(AuthContext);
  const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=${airingPage}`;

  const img_path = "https://image.tmdb.org/t/p/w1280";

  const { loading, data } = useFetch(url);
  return (
    <div className="movies-container">
      <Navbar />
      <div className="movie-wrapper">
        <Search />
        <div className="title-container">
          <h3>Airing Today</h3>
        </div>
        <div className="series-container">
          {data.map((movie) => {
            const {
              poster_path,
              id,
              backdrop_path,
              first_air_date,
              original_name,
            } = movie;
            const newDate = new Date(first_air_date);
            return (
              <Link to={`/airing_today/${id}`} className="show-link">
                <div key={id} className="series">
                  <img src={img_path + poster_path} alt="image" />
                  <div className="show-details">
                    <p>{newDate.getFullYear()}</p>
                    <h4>{original_name}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="page">
          <button onClick={() => setAiringPage(airingPage - 1)}>-</button>
          <p>Page: {airingPage}</p>
          <button onClick={() => setAiringPage(airingPage + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};
