import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../Components/useFetch";
import { useCastFetch } from "../Components/useCastFetch";
import { useDetailsFetch } from "../Components/useDetailsFetch";
import { Navbar } from "../Components/Navbar";
import { FaLink, FaImdb } from "react-icons/fa";
// import { GoToTop } from "./GoToTop";

export const PopularSerie = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [overview, setOverview] = useState("");
  const [firstAirDate, setFirstAirDate] = useState("");
  const [lastAirDate, setLastAirDate] = useState("");
  const { id } = useParams();

  const url =
    "https://api.themoviedb.org/3/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";

  const castUrl = `https://api.themoviedb.org/3/tv/${parseInt(
    id
  )}/credits?api_key=04c35731a5ee918f014970082a0088b1`;
  const img_path = "https://image.tmdb.org/t/p/w1280";

  const detailUrl = `https://api.themoviedb.org/3/tv/${parseInt(
    id
  )}?api_key=04c35731a5ee918f014970082a0088b1`;

  const { loading, data } = useFetch(url);
  const { loadingCast, cast } = useCastFetch(castUrl);
  const { loadingDetails, details } = useDetailsFetch(detailUrl);

  useEffect(() => {
    const trending = data.find((movie) => movie.id === parseInt(id));
    if (data.length > 0) {
      setTitle(trending.original_name);
      setImage(trending.poster_path);
      setRating(trending.vote_average);
      setOverview(trending.overview);
      setFirstAirDate(trending.first_air_date);
      setLastAirDate(trending.last_air_date);
    }
    return;
  }, [data, id]);

  return (
    <div className="movies-container single-movie-container">
      <Navbar />
      <div className="all-movie">
        <img src={img_path + image} alt="image" />
        <div className="full-movie">
          <h3>{title}</h3>
          <p className="tagline">{details.tagline}</p>
          <p className="rating">
            Rating:{" "}
            <span
              className={
                parseInt(rating) <= 4.5
                  ? "bad"
                  : parseInt(rating) <= 6.5
                  ? "good"
                  : "great"
              }
            >
              {rating}
            </span>
          </p>
          <div className="movie-stats">
            <div className="movie-stat">
              <h5>Language</h5>
              <p>{details.original_language}</p>
            </div>
            <div className="movie-stat">
              <h5>First Air</h5>
              <p>{details.first_air_date}</p>
            </div>

            <div className="movie-stat">
              <h5>Last Air</h5>
              <p>{details.last_air_date}</p>
            </div>
            <div className="movie-stat">
              <h5>Status</h5>
              <p>{details.status}</p>
            </div>
          </div>
          <div className="overview-container">
            <h4>Overview</h4>
            <p className="overview">{overview}</p>
          </div>

          <div className="links-container">
            <a
              className="link"
              href={details.homepage}
              target="_blank"
              rel="noreferrer noopener"
            >
              Website <FaLink />
            </a>
          </div>

          <div className="casts-container">
            <h4>Casts</h4>
            <div className="casts-wrapper">
              {cast.map((casts) => {
                const { id, name } = casts;
                return (
                  <p key={id} className="cast-name">
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
