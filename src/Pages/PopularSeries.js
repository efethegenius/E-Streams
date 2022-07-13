import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { useFetch } from "../Components/useFetch";

export const PopularSeries = () => {
  const { popularPage, setPopularPage } = useContext(AuthContext);
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=${popularPage}`;

  const img_path = "https://image.tmdb.org/t/p/w1280";

  const { loading, data } = useFetch(url);

  return (
    <>
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
            <Link to={`/popular_series/${id}`} className="show-link">
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
        <button onClick={() => setPopularPage(popularPage - 1)}>-</button>
        <p>Page: {popularPage}</p>
        <button onClick={() => setPopularPage(popularPage + 1)}>+</button>
      </div>
    </>
  );
};
