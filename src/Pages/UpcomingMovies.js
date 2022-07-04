import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../Components/useFetch";

export const UpcomingMovies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";

  const img_path = "https://image.tmdb.org/t/p/w1280";

  const { loading, data } = useFetch(url);

  return (
    <div className="series-container">
      {data.map((movie) => {
        const { poster_path, id, backdrop_path, release_date, title } = movie;
        const newDate = new Date(release_date);
        return (
          <Link to={`/upcoming_movie/${id}`} className="show-link">
            <div key={id} className="series">
              <img src={img_path + poster_path} alt="image" />
              <div className="show-details">
                <p>{newDate.getFullYear()}</p>
                <h4>{title}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
