import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../Components/useFetch";

export const TrendingMovies = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const img_path = "https://image.tmdb.org/t/p/w1280";

  const { loading, data } = useFetch(url);

  console.log(data);

  return (
    <div className="trending-movies-container">
      {data.map((movie) => {
        const { poster_path, id, backdrop_path, release_date, title } = movie;

        const newDate = new Date(release_date);
        return (
          <Link to={`/trending_movie/${id}`}>
            <div
              key={id}
              className="movie"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                  img_path + backdrop_path
                })center/cover no-repeat`,
              }}
            >
              <div className="trending-movies-details">
                <p>{newDate.getFullYear()}</p>
                <h3>{title}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
